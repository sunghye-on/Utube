import express from "express";
import routes from "../routes";
import { videoDetail, deleteVideo, getUpload, postUpload, postEditVideo, getEditVideo } from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
//업로드
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
//비디오 디테일
videoRouter.get(routes.videoDetail(), videoDetail);
//비디오 수정 
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//비디오 삭제
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter