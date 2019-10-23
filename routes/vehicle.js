const express = require('express');
const Vehicle = require('../models/Vehicle');
const Issue = require('../models/Issue');

const router = express.Router();

router.get("/add", (req, res) => {
  res.render('vehicle/add');
})

router.post("/add", (req, res) => {
  const {
    make,
    type,
    vehicleName,
    color,
    vin,
    licensePlate,
    year,
    model
  } = req.body

  const vehicle = new Vehicle({
    make,
    type,
    vehicleName,
    color,
    vin,
    licensePlate,
    year,
    model
  })

  vehicle.save(() => {
    res.redirect("/vehicle/all")
  });
})

router.get("/all", async (req, res) => {
  const vehicles = await Vehicle.find({})
  res.render("vehicle/all", {
    vehicles
  })
});

router.get("/one/:id", async (req, res) => {
  const id = req.params.id
  let foundVehicle = await Vehicle.findOne({ _id: id })
  let foundIssue = await Issue.findOne({ vehicle: id })

  res.render("vehicle/one", {
    vehicle: foundVehicle,
    issue: foundIssue
  })
})

module.exports = router;