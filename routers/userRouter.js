import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
//userDetail를 함수로 바꿔줬으니 실행 시켜야한다.
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;