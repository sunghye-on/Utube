import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import {
  getJoin,
  logout,
  postJoin,
  getLogin,
  postLogin
} from "../controller/userController";
import { onlyPubilc } from "../middlewares";

const globalRouter = express.Router();

//전역으로 보여줄 것들을 글로벌 라우터에서 다루자
globalRouter.get(routes.join, onlyPubilc, getJoin);
globalRouter.post(routes.join, onlyPubilc, postJoin, postLogin);

globalRouter.get(routes.login, onlyPubilc, getLogin);
globalRouter.post(routes.login, onlyPubilc, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
