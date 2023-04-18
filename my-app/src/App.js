import { useState, useMemo } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePost";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(articles, filter.sort, filter.query);

  const createPost = (newArticle) => {
    setArticles([...articles, newArticle]);
    setModal(false);
  };

  const deletePost = (article) => {
    setArticles([...articles.filter((ar) => ar.id !== article.id)]);
  };

  async function fetchPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let responseCopy = [...response.data].splice(0, 10);

    setArticles(responseCopy);
  }

  return (
    <div className="app">
      <MyButton onClick={fetchPosts}>FetchSome</MyButton>
      <MyButton onClick={() => setModal(true)} style={{ padding: "5px ", background: "transparent" }}>
        Показать модальное окно
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr style={{ margin: "25px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <PostList articles={sortedAndSearchedPosts} deletePost={deletePost}></PostList>
    </div>
  );
}

export default App;
