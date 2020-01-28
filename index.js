import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;
const handleListen = () => console.log(`✅ 서버 연결 완료 http://localhost:${PORT}`);

const handleHome = (req,res) => res.send("hihi");

const handleProfile = (req,res) => res.send("hi profile");
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
app.get("/", handleHome);
app.get("/profile",handleProfile);

app.listen(PORT, handleListen);