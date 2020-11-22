import express from 'express';
import * as MarsRoverController from '../src/controllers/MarsRoverController';

const app = express();
const PORT = 8080;

app.set("port", PORT);


app.get("/deployAndMove", MarsRoverController.deployAndMove);

export default app;
