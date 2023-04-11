function CssTest(props) {
  return (
    <div className="css-root">
      <h1 className="css-h1">{props.obj.title}</h1>
      <div className="someDiv">
        <strong className="strong">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi numquam iste quibusdam quo, ipsam exercitationem modi esse nam placeat tempora quia, aspernatur earum deserunt architecto dignissimos eos rem? Ducimus!</strong>
        <button className="delete-btn">{props.obj.btnText}</button>
      </div>
    </div>
  );
}

export default CssTest;
