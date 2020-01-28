import express from "express";
export const userRouter = express.Router();
// 라우터를 통해 들어온 곳이다 ./user로 시작한다.
userRouter.get("/", (req,res) => res.send("user index"));
userRouter.get("/edit", (req,res) => res.send("user edit"));
userRouter.get("/password", (req,res) => res.send("user password"));

///MVC 패턴부터 시작하면됩니다