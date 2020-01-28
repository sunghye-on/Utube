import express from "express";
const app = express();
const PORT = 4000;
const handleListen = () => console.log(`✅ 서버 연결 완료 http://localhost:${PORT}`);

const handleHome = (req,res) => res.send("hihi");

const handleProfile = (req,res) => res.send("hi profile");
//route
//해당 URL이 요청되고 해당하는 함수들이 호출된다. 
app.get("/", handleHome);
app.get("/profile",handleProfile);

app.listen(PORT, handleListen);