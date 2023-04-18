import React from "react";
import ArticleTemplate from "./ArticleTemplate";

const PostList = ({ articles, deletePost }) => {
  if (!articles.length) {
    return <h2 style={{ textAlign: "center", marginTop: "25px" }}>Посты не найденны!</h2>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Список постов</h1>
      {articles.map((elem, index) => (
        <ArticleTemplate number={index + 1} deletePost={deletePost} obj={elem} key={elem.id}></ArticleTemplate>
      ))}
    </div>
  );
};

export default PostList;
