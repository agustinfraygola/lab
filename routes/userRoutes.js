import express from "express";
import { getAllUsers, updateUser, deleteUser, createUser } from "../controller/userController";

const route = express.Router();

route.get("/user",getAllUsers)
route.post("/user", createUser);
route.put("/user/:id", updateUser);
route.delete("/user/:id", deleteUser);

export default route




