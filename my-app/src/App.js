import { useState, useMemo } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [articles, setArticles] = useState([
    { id: 2, title: "ббб", descr: "ббб" },
    { id: 1, title: "ааа", descr: "ааа" },
    { id: 3, title: "ссс", descr: "ссс" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("some");
    if (selectedSort) {
      return [...articles].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return articles;
  }, [articles, selectedSort]);

  const createPost = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  const deletePost = (article) => {
    setArticles([...articles.filter((ar) => ar.id !== article.id)]);
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="app">
      <PostForm create={createPost}></PostForm>
      <hr style={{ margin: "25px 0" }} />
      <MyInput placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></MyInput>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={"Сортировка"}
        option={[
          { value: "title", name: "По названию", id: "1" },
          { value: "descr", name: "По описанию", id: "2" },
        ]}></MySelect>
      {articles.length !== 0 ? <PostList articles={sortedPosts} deletePost={deletePost}></PostList> : <h2 style={{ textAlign: "center", marginTop: "25px" }}>Cannot found!</h2>}
    </div>
  );
}

export default App;
