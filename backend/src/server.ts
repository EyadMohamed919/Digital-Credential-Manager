import type {Request, Response} from "express";
const express = require("express");
const userRouter = require("./router/userRouter");
const app = express();
const PORT:number = 5000;
app.use(express.json());
// app.get("/:name", (req:Request, res:Response)=>{
//     res.send("Hello world, " + req.params.name);
// });

app.use("/user", userRouter); 
app.listen(PORT,  ()=>{
    console.log("Server started on port http://localhost:" + PORT);
});