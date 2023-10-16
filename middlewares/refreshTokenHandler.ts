import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { AppError } from "../error/AppError";
import { RequestWithUser } from "../utils/types";
import { Decode } from "../utils/types";

export const refreshTokenHandler = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      throw new AppError(401, "unauthorized");
    }

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as Decode;

    req.user = decodedToken;

    next();
  } catch (error) {
    next(error);
  }
};
