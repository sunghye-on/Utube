import multer from "multer";
import routes from "./routes";

//multer를 이용
const multerVideo = multer({ dest: "uploads/videos/" });

//로컬에 변수를 저장하면 이 변수들을 템플릿엣 사용할 수 있다.
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "UtUbe";
  res.locals.routes = routes;
  // passport가 user에 관한 내용들을 포함하는 대부분의 내용들을 req에서 올려주기때문
  res.locals.user = req.user || null;
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
