const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisines: req.params.cuisine });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let sortOption = {};
    if (req.query.sortBy) {
      sortOption.restaurant_id = req.query.sortBy === "ASC" ? 1 : -1;
    }
    const restaurants = await Restaurant.find().sort(sortOption);
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisines: "Delicatessen",
      city: { $ne: "Brooklyn" },
    })
      .select("cuisines name city -_id")
      .sort({ name: 1 });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { restaurant_id, name, cuisines, city } = req.body;

    const newRestaurant = new Restaurant({
      restaurant_id,
      name,
      cuisines,
      city,
    });

    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
