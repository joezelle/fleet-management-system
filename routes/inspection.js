/* eslint-disable prefer-destructuring */
const express = require("express");
const Inspection = require("../models/Inspection");
const Issue = require("../models/Issue");
const issueRoute = require("../routes/issue");

const router = express.Router();

const app = express();

app.use(issueRoute);

// ROUTES

// Inspection Route
router.get("/add", async (req, res) => {
  const issues = await Issue.find({});
  res.render("inspection/add", {
    issues
  });
});

// Inspection Form Submit Route
router.post("/add", async (req, res) => {
  const { vehicleIssue, issueDate, dueDate } = req.body;

  const inspection = new Inspection({
    vehicleIssue,
    issueDate,
    dueDate
  });

  await inspection.save(() => {
    res.redirect("/inspection/all");
  });
});

// Inspection list
router.get("/all", async (req, res) => {
  const inspections = await Inspection.find({}).populate("vehicleIssue");
  res.render("inspection/all", {
    inspections
  });
});

// Edit Inspection Form
router.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { vehicleIssue, issueDate, dueDate } = await Inspection.findOne({
    _id: id
  });

  const inspection = new Inspection({
    vehicleIssue,
    issueDate,
    dueDate
  });

  const issues = await Issue.find({});
  const inspections = await Inspection.find({});
  res.render("inspection/edit", {
    issues,
    inspections,
    inspection
  });
});

// Edit Inspection Submit Route
router.put("/edit/:id", async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const inspection = await Inspection.findOneAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  inspection.save();
  res.redirect("/inspection/all");
});

// Inspection Delete Route
router.get("/all/:id", function(req, res) {
  Inspection.findByIdAndDelete({ _id: req.params.id }).then(() => {
    res.redirect("/inspection/all");
  });
});

module.exports = router;
