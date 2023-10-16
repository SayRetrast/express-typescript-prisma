import { Request } from "express";

export interface Decode {
  id: number;
  username: string;
}

export interface RequestWithUser extends Request {
  user: Decode;
}

export type UserData = {
  id: string;
  password: string;
  username: string;
};
