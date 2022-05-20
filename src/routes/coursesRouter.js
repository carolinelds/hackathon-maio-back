import { Router } from "express";
import { getCourses } from "./../controllers/coursesController.js";

const coursesRouter = Router();

coursesRouter.get('/courses', getCourses);

export default coursesRouter;