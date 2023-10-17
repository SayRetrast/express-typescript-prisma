import {
  registration,
  login,
  refreshToken,
} from "../controllers/userController";
import { Router, RequestHandler } from "express";
import { tokenHandler } from "../middlewares/tokenHandler";

export const userRouter = Router();

userRouter.post("/registration", registration as RequestHandler);
userRouter.post("/login", login as RequestHandler);
userRouter.post("/refreshToken", tokenHandler as RequestHandler, refreshToken as RequestHandler);
