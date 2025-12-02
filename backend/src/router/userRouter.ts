import type {Request, Response} from "express";
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req:Request, res:Response)=>{
    res.send("Ana users");
});

module.exports = userRouter;