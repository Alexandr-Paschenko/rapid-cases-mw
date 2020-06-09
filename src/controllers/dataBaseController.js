const mysql = require("mysql2");

// const connection = mysql.createConnection({
// 	host: "rapid-dev.cqnpdjiblhkn.us-east-1.rds.amazonaws.com",
// 	user: "rapid",
// 	database: "innodb",
// 	password: "rapidDB$"
// });

function setupConnection() {
	return mysql.createConnection({
		host: "rapid-dev.cqnpdjiblhkn.us-east-1.rds.amazonaws.com",
		user: "rapid",
		database: "innodb",
		password: "rapidDB$"
	}).promise();
}

function makeQuery() {
	const connection = setupConnection();
	const sql = `INSERT INTO RecognizeObject(Storage_Credentials) VALUES('someEncryptedStringShouldBeHere')`;
	return connection.query(sql)
		.then((result) => {
			console.log(result);
			return Promise.resolve(result[0].insertId);
		})
		.catch((err) => {
			console.log(err);
			return Promise.reject(err);
		})
}

// function closeConnection(connection) {
// 	connection.end(function (err) {
// 		if (err) {
// 			return console.log("Ошибка: " + err.message);
// 		}
// 		console.log("Подключение закрыто");
// 	});
// }


module.exports = {
	setupConnection,
	makeQuery
};
