import {
  registration,
  login,
  auth,
} from "../controllers/userController";
import { Router, RequestHandler } from "express";
import { authHandler } from "../middlewares/authHandler";

export const userRouter = Router();

userRouter.post("/registration", registration as RequestHandler);
userRouter.post("/login", login as RequestHandler);

userRouter.get("/auth", authHandler as RequestHandler, auth as RequestHandler);
