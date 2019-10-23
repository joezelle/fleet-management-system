/* eslint-disable no-param-reassign */
const express = require("express")
const mongoose = require("mongoose");
const Operator = require("../models/Operator");


const router = express.Router();

router.get("/add", (req, res) => {
  res.render("operator/add");
});

router.get("/all", async (req, res) => {
  const operators = await Operator.find({}).sort({ firstname: 1 })
  res.render("operator/all", {
    operators
  });
});

router.get("/all/:id", function (req, res) {
  Operator.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.redirect("/operator/all")
    });
});


// router.get("/add/:id", async (req, res) => {
//   await Operator.findByIdAndUpdate({ _id: req.params.id })
//     .then(() => {
//       res.render("/operator/add");
//     });
// });

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
  })

  operator.save(() => {
    res.redirect("/operator/all")
  });
});

router.get("/edit/:id", async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  // const id = req.params.id;
  // const {
  //   firstname,
  //   lastname,
  //   gender,
  //   email,
  //   number,
  //   driverID
  // } = await Operator.findOne({ _id: id });

  const operators = await Operator.find({ _id: req.params.id });

  res.render("operator/edit", {
    operators
  });
});

router.post("/edit/:id", (req, res) => {

  Operator.findByIdAndUpdate({ _id: req.params.id })
    .then(operator => {
      operator.firstname = req.body.firstname;
      operator.lastname = req.body.lastname;
      operator.gender = req.body.gender;
      operator.email = req.body.email;
      operator.number = req.body.number;
      operator.driverID = req.body.driverID;
      operator.save()
        .then(() => {
          res.redirect("/operator/all")
        });
    });
});
module.exports = router;