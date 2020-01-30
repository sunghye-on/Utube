//렌더할 때 pageTitle을 같이 보낼 수 있다. 혹은 원하는 무엇이라도 같이 보내줄 수 있다.
export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
    //console.log(req.query.term);
    //아래 코드는 query에서 term을 가져 오는 것과 같은 코드이다. 즉 req.query.term와 같은 코드
    //해당 방법이 term = req.query.term 라고 하는 것보다 더 좋은 방식으로 정보를 가져온다.
    const {
        //term을 searchBy로 해준다. 즉 req.query.term === searchBy
        query : {term : searchBy}  
    } = req;
    res.render("search", { pageTitle: "Search", searchBy:searchBy});  
};
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });