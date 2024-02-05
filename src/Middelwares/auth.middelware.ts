import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../../config/config";
import TokenService from "../Services/TokenService";

const tokenService = new TokenService();

class AuthenticationMiddelware {
  static async isLogin(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    try {
      const decoded = tokenService.verifyToken(token); // Замените 'your-secret-key' на ваш секретный ключ

      req.body.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  }
}

export default AuthenticationMiddelware;
