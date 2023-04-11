import React from "react";
import CssTest from "./CssTest";

const PostList = ({ articles }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Список постов</h1>
      {articles.map((elem) => {
        return <CssTest obj={elem} key={elem.title}></CssTest>;
      })}
    </div>
  );
};

export default PostList;
