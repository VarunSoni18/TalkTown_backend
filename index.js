import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors()); 

const PORT =  4002;   // yha bhi ek issue hai 4002 oeiginal 5000 changed
console.log(process.env.JWT_TOKEN,);


// const URI = "mongodb+srv://myapp_user:myappuservarun@project.upljjs5.mongodb.net/webchat?appName=PROJECT"
const URI = process.env.MONGODB_URI;
// console.log(URI);










try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
