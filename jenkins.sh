#/bin/bash

echo ""
INSTANCE="rapidapi"
if [[ "$1" =~ "staging" ]]; then
  INSTANCE="rapidapi-stg"
  NODE_ENV="staging"
fi
echo "Param 1 is $1"
echo "Current instance name is $INSTANCE"
echo ""

npm install
echo ""

#gulp
cp -R $PWD/src $PWD/build
#echo ""

echo "Stopping the $INSTANCE"
sudo /etc/init.d/$INSTANCE stop
echo ""

echo "Copying the files from current directory into $INSTANCE"
rm -rf /var/$INSTANCE/*
cp -R $PWD/* /var/$INSTANCE
echo ""

echo "Removing source files from publishing directory"
rm -rf /var/$INSTANCE/src
rm -rf /var/$INSTANCE/jenkins.sh
rm -rf /var/$INSTANCE/Gulpfile.json
echo ""

echo "Starting the $INSTANCE"
sudo /etc/init.d/$INSTANCE start
echo ""
