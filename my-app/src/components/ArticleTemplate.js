function ArticleTemplate(props) {
  return (
    <div className="css-root">
      <h1 className="css-h1">
        {props.number}.{props.obj.title}
      </h1>
      <div className="someDiv">
        <strong className="strong">{props.obj.body}</strong>
        <button onClick={() => props.deletePost(props.obj)} className="delete-btn">
          Удалить
        </button>
      </div>
    </div>
  );
}

export default ArticleTemplate;
