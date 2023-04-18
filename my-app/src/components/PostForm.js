import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [article, setArticle] = useState({ title: "", body: "" });

  const addNewArticle = (e) => {
    e.preventDefault();
    const newPost = {
      ...article,
      id: Date.now(),
    };
    create(newPost);
  };
  return (
    <form action="">
      <MyInput value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} placeholder="Post article"></MyInput>
      <MyInput
        placeholder="Post body"
        value={article.body}
        onChange={(e) => {
          setArticle({ ...article, body: e.target.value });
        }}></MyInput>
      <MyButton onClick={addNewArticle}>Create a post</MyButton>
    </form>
  );
};

export default PostForm;
