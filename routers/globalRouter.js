import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { getJoin, login, logout, postJoin } from "../controller/userController";

const globalRouter = express.Router();

//전역으로 보여줄 것들을 글로벌 라우터에서 다루자
globalRouter.get(routes.join, getJoin)
globalRouter.post(routes.join, postJoin)


globalRouter.get(routes.home, home)
globalRouter.get(routes.search, search)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logout) 


export default globalRouter;