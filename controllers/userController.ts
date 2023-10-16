import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { prisma } from "../utils/prisma";
import { AppError } from "../error/AppError";
import { UserData } from "../utils/types";
import { createToken } from "../utils/createToken";
import { RequestWithUser } from "../utils/types";

export const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body as UserData;

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (user) {
      throw new AppError(400, `user with username ${username} already exists`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    const token = createToken(createdUser.id, createdUser.username);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body as UserData;

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new AppError(400, `user with username ${username} doesn't exist`);
    }

    const isMatchedPasswords = await bcrypt.compare(password, user.password);

    if (!isMatchedPasswords) {
      throw new AppError(400, "wrong password");
    }

    const token = createToken(user.id, user.username);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const refreshToken = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = createToken(req.user.id, req.user.username);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
