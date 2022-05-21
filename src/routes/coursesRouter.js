import { Router } from "express";
import { getCourse, getCourses } from "./../controllers/coursesController.js";

const coursesRouter = Router();

coursesRouter.get('/courses', getCourses);
coursesRouter.get('/courses/:idCourse', getCourse);

export default coursesRouter;