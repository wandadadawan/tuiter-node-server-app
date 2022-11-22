import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors()); // allow cross origin sharing
app.use(express.json()); // parse JSON from HTTP request body
TuitsController(app);
HelloController(app);
UsersController(app);
app.listen(process.env.PORT || 4000);