import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./page/NotFound";
import VideoDetail from "./page/VideoDetail";
import Videos from "./page/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> }, //랜딩페이지
      { path: "videos", element: <Videos /> }, //경로가 videos일때, 핫 트렌드
      { path: "videos/:keyword", element: <Videos /> }, //경로가 videos이고 키워드를 넣었을때, 키워드로 검색한 영상
      { path: "videos/watch/:videoId", element: <VideoDetail /> }, //영상을 클릭해서 특정 영상으로 연결되었을 때
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 리액트가 경로에 따라 선택 */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
