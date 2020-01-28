import app from "./app";

const PORT = 4000;

const handleListen = () => console.log(`✅ 서버 연결 완료 http://localhost:${PORT}`);

app.listen(PORT,handleListen);