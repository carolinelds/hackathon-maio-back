import { Router } from "express";

import { validateSchema } from "../middlewares/joiValidationMiddleware.js";
import { loginSchema, signUpSchema } from "../schemas/userSchemas.js";
import { login, signUp, logout } from "../controllers/userControllers.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.post(
    "/login",
    (req, res, next) => {
        validateSchema(req, res, next, loginSchema);
    },
    login
);

userRouter.post(
    "/signup",
    (req, res, next) => {
        validateSchema(req, res, next, signUpSchema);
    },
    signUp
);

userRouter.delete("/logout", validateToken, logout);

export default userRouter;