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