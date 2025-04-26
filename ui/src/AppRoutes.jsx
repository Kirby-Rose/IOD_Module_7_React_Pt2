import { Typography } from "@mui/material";
import HomePage from "./containers/HomePage";
import { Routes, Route } from "react-router-dom";
import PageThree from "./containers/PageThree";
import PageFour from "./containers/PageFour";
import LabOne from "./containers/LabOne";
import LabTwo from "./containers/LabTwo";
import LabThree from "./containers/LabThree";
import PostsPage, { Post, PostList } from "./containers/pages/PostsPage";

function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<HomePage />} />
      <Route path="/page-two" element={<Typography>Page 2</Typography>} />
      <Route path="/page-three/:id" element={<PageThree />} />
      <Route path="/page-four" element={<PageFour />} />
      <Route path="/lab-one" element={<LabOne />} />
      <Route path="/lab-two" element={<LabTwo />} />
      <Route path="/lab-three" element={<LabThree />} />
      // add new Route branch to AppRoutes.jsx
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>
      {/* special route to handle if none of the above match */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
