import { Request, Response, NextFunction } from "express";
import { UserWorker } from "../../Database/Workers/UserWorker";
import bcryptjs from "bcryptjs";
import TokenService from "../../Services/TokenService";

const userWorker = new UserWorker();
const tokenService = new TokenService();

export const sign_in = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { login, password } = req.body;
    const user = await userWorker.get_one({ login: login });
    if (!user) return res.status(404).json({ message: "User not Found" });

    const isPassEquals = await bcryptjs.compare(password, user.password);
    if (!isPassEquals)
      return res.status(401).json({ message: "Incorrect Password" });

    const token = tokenService.generateToken(user.id!);
    res.status(200).json(token);
  } catch (err) {
    console.log("🚀 ~ err: Sign_In", err);
    next(err);
  }
};
