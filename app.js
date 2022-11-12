import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors()); // allow cross origin sharing
app.use(express.json()); // parse JSON from HTTP request body
TuitsController(app);
HelloController(app);
UsersController(app);
app.listen(process.env.PORT || 4000);