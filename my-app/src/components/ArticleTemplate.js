function ArticleTemplate(props) {
  return (
    <div className="css-root">
      <h1 className="css-h1">
        {props.number}.{props.obj.title}
      </h1>
      <div className="someDiv">
        <strong className="strong">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi numquam iste quibusdam quo, ipsam exercitationem modi esse nam placeat tempora quia, aspernatur earum deserunt architecto dignissimos eos rem? Ducimus!</strong>
        <button onClick={() => props.deletePost(props.obj)} className="delete-btn">
          {props.obj.descr}
        </button>
      </div>
    </div>
  );
}

export default ArticleTemplate;
