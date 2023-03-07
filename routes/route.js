import express from "express";

import {
  addUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../controllers/controller.js";

const route = express.Router();

route.post("/users", addUser);
route.put("/users/:id", updateUser);
route.delete("/users/:id", deleteUser);
route.get("/users", getAllUser);

export default route;
