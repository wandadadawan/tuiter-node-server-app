import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
const app = express();
app.use(express.json()); // parse JSON from HTTP request body
HelloController(app);
UsersController(app);
app.listen(4000);