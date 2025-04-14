import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "Token missing" });
    return;
  }

  const token = authHeader.split(" ")[1];
  const payload: any = verifyToken(token);

  if (!payload) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }

  (req as any).userId = payload.userId;
  next();
};
