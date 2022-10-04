import express from "express";
import Restaurant from "../models/restaurant.js";

const router = express.Router();

// http://localhost:3001/search/id/5eb3d668b31de5d588f4292c
router.get("/id/:id", async (req, res) => {
  const id = req.params.id;

  // if it can't find anything, returns null
  // null && undefined && "" = falsey
  // findById = searches based on the assigned mongodb id (_id)

  const restaurant = await Restaurant.findById(id).lean();

  // find based on the restaurant_id
  //const restaurant = await Restaurant.findOne({ restaurant_id: id }).lean();

  if (!restaurant) {
    return res.status(404).send("Sorry, restaurant not found");
  }

  res.send(restaurant);
});

// http://localhost:3001/search/name/Kosher%20Island?limit=10
router.get("/name/:name", async (req, res) => {
  const name = req.params.name;

  // default to 5 if req.query.limit === undefined
  const limit = req.query.limit || 5;

  console.log(limit);

  const restaurants = await Restaurant.find({ name }).limit(limit).lean();

  if (!restaurants.length) {
    return res.status(404).send("Sorry, restaurants not found");
  }

  res.send(restaurants);
});

export default router;
