import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFound from "../pages/NotFound";
import Layout from "pages/layout/view";
import DetailPost from "pages/detail_post/view";
import ManagePost from "pages/manage_post/view";
import Home from "pages/home/view";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* 홈화면 */}
          <Route path="/" element={<Home />} />
          {/* 홈화면에서 게시물 클릭하면 나오는 게시물 상세 페이지 */}
          <Route path="posts/:userid/:postid" element={<DetailPost />} />
          {/* 게시물 생성 */}
          <Route path="manage/newpost/:userid" element={<ManagePost></ManagePost>} />
          {/* 게시물 수정 */}
          {/* <Route path="manage/newpost/:userid/:postid" element={<ManagePost></ManagePost>} /> */}
          {/* 자신의 게시물 관리 */}
          {/* <Route path="manage/:userid" element={<ManagePost></ManagePost>} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
