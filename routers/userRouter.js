import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controller/userController";
import { onlyprivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyprivate, editProfile);
userRouter.get(routes.changePassword, onlyprivate, changePassword);
//userDetail를 함수로 바꿔줬으니 실행 시켜야한다.
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
