import express, { Router } from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();


// All routes in here are starting with /users
router.get("/", getUsers);

// Adding Unique ID to all user
router.post("/", createUser);

// This chunk will fetch/get user's data once it's updated from above chunk with {firstName, lastName, age}
//-----  "/:id" ----- is main for navigation with api's as it serve's as placeholder for requested/given parameters
router.get("/:id", getUser);

// This chunk will remove/delete/filter user data from database with the ID given in the request
router.delete("/:id", deleteUser);

// This chunk will update user data as per given parameters {firstName, lastName, age}
router.patch("/:id", updateUser);

export default router;
