import { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import CssTest from "./components/CssTest";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [articles, setArticle] = useState([
    { title: "Title1", btnText: "BtnText1" },
    { title: "Title2", btnText: "BtnText2" },
    { title: "Title3", btnText: "BtnText3" },
  ]);

  return (
    <div className="app">
      <PostList articles={articles}></PostList>
    </div>
  );
}

export default App;
