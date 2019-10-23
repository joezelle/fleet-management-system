/* eslint-disable prefer-destructuring */
const express = require("express");
const Vehicle = require("../models/Vehicle");

const router = express.Router();

const app = express();

// ROUTES

// Inspection Route
router.get("/", async (req, res) => {
  res.render("index");
});

module.exports = router;
