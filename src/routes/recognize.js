(function () {
	'use strict'
	const router = require('express').Router();
	const dataBaseController = require('../controllers/dataBaseController');


	router.post('/createJob', (req, res) => {

		console.log(req.body);
		//do smthning
		return dataBaseController.makeQuery()
			.then((recordId) => {
				res.status(200).json({
					message: 'Success',
					jobId: recordId + 'someUniqueKey'
				});
			})
			.catch((err) => {
				res.status(200).json({
					message: 'Error',
					errorMessage: 'SomeErrorMessage'

				})
			})
	});

	router.post('/processVideo', (req, res) => {

		console.log(req.body);
		//checksum
		//do smthning

		return res.status(200).json({
			code: 200,
			message: 'Success'
		});
	});

	router.post('/checkJobsStatus', (req, res) => {

		console.log(req.body);
		//do smthning

		return res.status(200).json({
			code: 200,
			message: 'Success',
			data: {
				jobs: [{
					jobId: 'testJobId1',
					jobStatus: 'testStatus1'
				},
				{
					jobId: 'testJobId2',
					jobStatus: 'testStatus2'
				}]
			}
		});
	});

	module.exports = router;
}());
