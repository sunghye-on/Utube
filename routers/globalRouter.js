import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { join, login, logout } from "../controller/userController";

const globalRouter = express.Router();

//전역으로 보여줄 것들을 글로벌 라우터에서 다루자
globalRouter.get(routes.home, home)
globalRouter.get(routes.search, search)
globalRouter.get(routes.join, join)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logout) 


export default globalRouter;