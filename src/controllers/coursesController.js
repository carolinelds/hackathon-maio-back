import { ObjectId } from "mongodb";

import db from "./../db.js"; 

export async function getCourses(_req, res){
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

export async function getCourse(req, res) {
    const {idCourse} = req.params;

    try{
        const course = await db.collection("courses").findOne({_id: new ObjectId(idCourse)});

        if(course){
            res.send(course);
        } else{
            res.sendStatus(404);
        }

    } catch(error){
        console.log(error);
        res.status(500).send({
            message: 'Error getting course',
            detail: error
        });
    }
}