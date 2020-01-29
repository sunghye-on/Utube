// 장고의 view.py와 같은 부분이다 현재는 페이지에 글자만 랜더랑하고 있다.

export const join = (req,res) => res.send('Join');
export const login = (req,res) => res.send('login');
export const logout = (req,res) => res.send('logout');


export const users = (req,res) => res.send('User')
export const userDetail = (req,res) => res.send("UserDetail") 
export const editProfile = (req,res) => res.send("editProfile")
export const changePassword = (req,res) => res.send("changePassword")