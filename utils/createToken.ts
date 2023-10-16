import jwt from "jsonwebtoken";

export const createToken = (id: number, username: string) =>
  jwt.sign({ id, username }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "1d",
  });
