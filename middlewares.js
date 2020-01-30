import routes from "./routes";

//로컬에 변수를 저장하면 이 변수들을 템플릿엣 사용할 수 있다.
export const localsMiddleware = (req , res, next) => {
    res.locals.siteName = "UtUbe";
    res.locals.routes = routes;

    res.locals.user = {
        isAuth : true,
        id:1
    }
    next();
}