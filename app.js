import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";
import "./passport";

dotenv.config();
const app = express();
//쿠키 저장소를 만들어서 아래의 세션옵션에 추가하자
const CookieStore = MongoStore(session);
//앱의 보안을 돕는helmet
app.use(helmet());
app.set("view engine", "pug");
//route
app.use("/uploads", express.static("uploads"));
//static파일에 대한 라우터
app.use("/static", express.static("static"));
//cookie Parser는 쿠키를 전달받아서 사용할 수 있도록 만들어 주는 미들웨어다. 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용
//body Parser는 사용자가 웹 사이트로 전달하는 정보들을 검사하는 미들웨어다. request 정보에서 form이나 jsom형태로 된 body를 검사
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//로그정보를 찍어 주는 morgan
app.use(morgan("dev"));
//쿠키의 세션 정보를 다룰수 있는 다양한 옵션들이 많다.
app.use(
  session({
    //쿠키에 들어있는 세션의ID를 암호화 하기위한 secret
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    // 몽고와 쿠키저장소와 연결을 해줘야한다.
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);
//passport 시작을 위함
app.use(passport.initialize());
//passport를 통해서 세션을 이용(deserialization을 이용!!)
app.use(passport.session());
//
app.use(localsMiddleware);
//해당 URL이 요청되고 해당하는 함수들이 호출된다.
// 라우터를 이용한 URL쪼개기
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
export default app;
