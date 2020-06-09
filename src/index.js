const app = require('./app/index');
const http = require('http');

const server = http.createServer(app);
const port = process.env.PORT || 8001;

server.listen(port, error => {
  if (error) throw new Error(error);

  console.log(`Server is running on port ${port}`);

});