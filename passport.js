import passport from "passport";
import User from "./models/User";

/*  passport는 다양한 기능들을 지름길처럼 하나의 함수로 만들어 놨다
    우리는그것을 가져다 쓰기만 하면된다.
*/

//이거 한줄이 유저이름과 비밀번호를 받고 처리하는 과정을 하나의 함수로 가능
passport.use(User.createStrategy());

// serializeUser는 쿠키에 사용자의 id만을 담아서 보내주는 일련의 과정을 하나의 함수로 간단하게 만들어져있다.
passport.serializeUser(User.serializeUser());
// deserializeUser는 쿠키에 있는 id정보를 이용하여 사용자를 식별해내는 일련의 과정을 하나의 함수로 간단하게 만듬!
passport.deserializeUser(User.deserializeUser());
