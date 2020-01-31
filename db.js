import mongoose from "mongoose";
import dotenv from "dotenv";
//아래의 함수로 .env의 내용들을 가져올 수 있고 그 내용들은 process.env에 저장
dotenv.config();
import "./models/video";
import "./models/Comment";
mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useFindAndModifiy: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const handleDBOpen = () => console.log("🖐 Open DB!");
const handleDBError = error => console.log(`🤮 DB Connection ERROR : ${error}`); 

db.once("open", handleDBOpen);
db.on("error", handleDBError);


























// export const videos = [
//     {
//         id: 215632,
//         title: 'test비디오1',
//         description: '테스트용 데이터1',
//         views: 522222,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 7777,
//             name: "sunghyeon",
//             email: "sung@sung.com",
//         }
//     },
//     {
//         id: 142453,
//         title: 'test비디오2',
//         description: '테스트용 데이터2',
//         views: 345346,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 1123,
//             name: "sunghyeon1",
//             email: "sung1@sung.com",
//         }
//     },
//     {
//         id: 689456,
//         title: 'test비디오3',
//         description: '테스트용 데이터3',
//         views: 343,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 1111,
//             name: "sunghyeon2",
//             email: "sung2@sung.com",
//         }
//     },
// ]