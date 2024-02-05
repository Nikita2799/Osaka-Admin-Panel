import { Router } from "express";

export function isExpressRouter(obj: any): obj is Router {
  return obj && typeof obj === "function" && obj.stack !== undefined;
}
