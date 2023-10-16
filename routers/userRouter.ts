import {
  registration,
  login,
  refreshToken,
} from "../controllers/userController";
import { Router, RequestHandler } from "express";
import { refreshTokenHandler } from "../middlewares/refreshTokenHandler";

export const userRouter = Router();

userRouter.post("/registration", registration as RequestHandler);
userRouter.post("/login", login as RequestHandler);
userRouter.post("/refreshToken", refreshTokenHandler as RequestHandler, refreshToken as RequestHandler);
