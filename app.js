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

//cookie Parser는 쿠키를 전달받아서 사용할 수 있도록 만들어 주는 미들웨어다. 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용
//body Parser는 사용자가 웹 사이트로 전달하는 정보들을 검사하는 미들웨어다. request 정보에서 form이나 jsom형태로 된 body를 검사
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