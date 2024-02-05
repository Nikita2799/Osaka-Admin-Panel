import { Request, Response, NextFunction } from "express";
import { UserWorker } from "../../Database/Workers/UserWorker";
import bcryptjs from "bcryptjs";

const userWorker = new UserWorker();

export const sign_up = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { login, password } = req.body;
    const user = await userWorker.get_one({ login });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashPassword = await bcryptjs.hash(password, 3);

    await userWorker.create({ login, password: hashPassword });
    res.status(201).json("OK");
  } catch (err) {
    console.log("🚀 ~ err: Sign_Up", err);
    next(err);
  }
};
