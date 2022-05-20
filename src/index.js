import express, { json } from 'express';
import cors from 'cors';
import testRouter from './routes/testRouter.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(testRouter);

app.listen(process.env.PORT, () => console.log("Server running on port " + process.env.PORT));


/*  */

app.get('/courses', getCourses);

async function getCourses(_req, res){
    try {
        const courses = await db.collection('courses').find().toArray();
        res.send(courses);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error getting courses',
            detail: error
        });
    }
}