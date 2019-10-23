const express = require("express")
const Operator = require("../models/Operator");


const router = express.Router();

router.get("/add", (req, res) => {
  res.render("operator/add");
});

router.post("/add", (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    email,
    number,
    driverID
  } = req.body

  const operator = new Operator({
    firstname,
    lastname,
    email,
    number,
    gender,
    driverID
  });

  operator.save(() => {
    res.redirect("/operatorList")
  });
});

router.get("/all", async (req, res) => {
  const operators = await Operator.find({}).sort({ name: 1 })
  res.render("operator/all", {
    operators
  });
});

router.get("/edit", (req, res) => {
  res.render("operator/edit");
});

module.exports = router