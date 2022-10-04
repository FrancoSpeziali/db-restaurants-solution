import express from "express";
import Restaurant from "../models/restaurant.js";

const router = express.Router();

router.patch("/name/:id", async (req, res) => {
  const id = req.params.id;
  const newName = req.body.name;

  const updatedRestaurant = await Restaurant.findByIdAndUpdate(
    id,
    {
      name: newName,
    },
    {
      new: true,
    }
  );

  if (!updatedRestaurant) {
    return res.status(404).send("No restaurant found");
  }

  res.json({ message: "Restaurant updated", data: updatedRestaurant });
});

export default router;
