import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [article, setArticle] = useState({ title: "", descr: "" });

  const addNewArticle = (e) => {
    e.preventDefault();
    const newPost = {
      ...article,
      id: Date.now(),
    };
    console.log(newPost);
    create(newPost);
  };
  return (
    <form action="">
      <MyInput value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} placeholder="Post article"></MyInput>
      <MyInput
        placeholder="Post descr"
        value={article.descr}
        onChange={(e) => {
          setArticle({ ...article, descr: e.target.value });
        }}></MyInput>
      <MyButton onClick={addNewArticle}>Create a post</MyButton>
    </form>
  );
};

export default PostForm;
