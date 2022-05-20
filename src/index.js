import express, { json } from 'express';
import cors from 'cors';
import dotenv from "dotenv";

import testRouter from './routes/testRouter.js';
import userRouter from './routes/userRouter.js';
import coursesRouter from './routes/coursesRouter.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(testRouter);
app.use(userRouter);
app.use(coursesRouter);

app.listen(process.env.PORT, () => console.log("Server running on port " + process.env.PORT));