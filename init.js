import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const handleListen = () => console.log(`✅ 서버 연결 완료 http://localhost:${PORT}`);

app.listen(PORT,handleListen);