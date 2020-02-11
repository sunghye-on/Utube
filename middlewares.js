import multer from "multer";
import routes from "./routes";

//multer를 이용
const multerVideo = multer({ dest: "uploads/videos/" });

//로컬에 변수를 저장하면 이 변수들을 템플릿엣 사용할 수 있다.
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "UtUbe";
  res.locals.routes = routes;
  // passport가 user에 관한 내용들을 포함하는 대부분의 내용들을 req에서 올려주기때문
  res.locals.loggedUser = req.user || null;
  next();
};

// 현재상태를 확인하여 로그인이 되어있는 상태라면 바로 홈으로 보내고 아니면 다음으로~
export const onlyPubilc = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};
// 위에 미들웨어랑은 반대로 로그인했을 때만 사용가능
export const onlyprivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
