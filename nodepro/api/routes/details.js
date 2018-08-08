const express = require('express');
const router = express.Router();
const User = require('../model/user-info.vo');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
	User.find({}, (err, users) => {
		res.status(200).json({
			message: 'get request for details',
			body: users
		});
	});
});

router.post('/login', (req, res, next) => {
	User.findOne({ email: req.body.email, password: req.body.password })
	.then( data => {
		if(data) {
			res.status(201).json({
				message: "Loged In",
				body: data
			});
		} else {
			res.status(201).json({
				message: "Unauthorised",
			});
		}
	}).catch(err => {
		res.status(400).json({
			message: err,
		});
	})
});

router.post('/', (req, res, next) => {
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		cell: req.body.cell,
		email: req.body.email,
		password: req.body.password
	});

	if (req.body._id) {
		User.findByIdAndUpdate(req.body._id, {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			cell: req.body.cell,
			email: req.body.email,
			password: req.body.password
		}, { new: true })
			.then(data => {
				res.status(201).json({
					message: 'Data Updated successfully',
				});
			}).catch(err => {
				console.log(err);
			});

	}
	else {
		user.save()
			.then(data => {
				res.status(201).json({
					message: 'Data added successfully',
				});
			}).catch(err => {
				console.log(err);
			});
	}
});

router.get('/', (req, res, next) => {
	const id = req.params.id;
	if (id == "vin") {
		res.status(200).json({
			message: 'Name is vinay patidar'
		});

	}
	else {
		res.status(200).json({
			message: 'Wrong Id'
		});
	}
});

router.delete('/:_id', (req, res, next) => {
	console.log("xxxxxxxxxxxxxxxxxxx xxxxxxxx delete init " + req.params._id);
	User.findByIdAndRemove(req.params._id)
		.then(data => {
			if (!data) {
				return res.status(404).send({
					message: "Note not found with id " + req.params.id
				});
			}
			res.status(201).json({
				message: 'Delete successfully',
			});
		}).catch(err => {
			console.log(err);
		});
});


module.exports = router;