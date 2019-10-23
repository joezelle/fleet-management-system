const express = require("express");
const mongoose = require("mongoose");
const Assignment = require("../models/Assignment");
const Operator = require("../models/Operator");
const Vehicle = require("../models/Vehicle");

const router = express.Router();

const app = express();

router.get("/add", async (req, res) => {
	const operators = await Operator.find({});
	const vehicles = await Vehicle.find({});
	res.render("assignments/add", {
		operators,
		vehicles
	});
})

router.post("/add", async (req, res) => {
	const { vehicle, operator, startDate, endDate, tripDetails } = req.body;

	console.log(assignments);
	const Assignments = new assignments({
		vehicle,
		operator,
		startDate,
		endDate,
		tripDetails
	});

	await assignments.save();
	res.redirect("/assignments/all");
});

router.get("/all", async (req, res) => {
	const assignments = await Assignment.find({}).populate("assignments") // Populate func returns ID
	res.render("assignments/all", {
		assignments
	});
});


module.exports = router;