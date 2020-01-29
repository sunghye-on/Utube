import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

//route
//
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//앱의 보안을 돕는helmet
app.use(helmet())
//로그정보를 찍어 주는 morgan
app.use(morgan("dev"));
//해당 URL이 요청되고 해당하는 함수들이 호출된다. 
// 라우터를 이용한 URL쪼개기
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
export default app;