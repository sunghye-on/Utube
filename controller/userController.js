import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// 장고의 view.py와 같은 부분이다

// 회원가입
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res, next) => {
  //콘솔로 찍어보면 내용들을 알아 볼 수 있다.
  //console.log(req.body);
  // 만약에 body Parser가 없었다면 콘솔에서는 undifined가 나왔을 것이다.

  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // user에 모델안에 User에 name과 email에 넣고 User에 register해준다.
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (e) {
      console.log(`ERROR : 👉 ${e}`);
      res.redirect(routes.home);
    }
  }
};

//로그인
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
//우리가 설치한 strategy인 local를 작성해준다. 또한 옵션으로 성공/실패시 어디로 redirect할지 정할 수 있다.
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  console.log(profile);
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};
export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //로그아웃 나중에 만들기
  req.logout();
  res.redirect(routes.home);
};
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
