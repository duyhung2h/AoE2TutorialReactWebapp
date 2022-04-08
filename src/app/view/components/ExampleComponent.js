import getExampleList from '../../db/example.service.js'

function GetExamplePage(props) {
  console.log(props)
  const examplePageContent = getExampleList().map((element) => {
    return (
      <div className="w3-quarter" key={element.exampleId}>
        <GetExampleComponent exampleObject={element}/>
      </div>
    );
  }).reverse();
  const examplePage = [
    <div
      className="w3-main w3-content w3-padding row"
      styles="max-width:1200px;margin-top:100px"
    >
      {examplePageContent}
    </div>,
  ];
  examplePage.push(
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          «
        </a>
        <a href="#" className="w3-bar-item w3-black w3-button">
          1
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          2
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          3
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          4
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          »
        </a>
      </div>
    </div>
  );
  return examplePage;
}
function GetExampleComponent(props) {
  const exampleObject = props.exampleObject
  console.log(props.exampleObject);
  return (
    <div>
      <img
        src="app/assets/images/example1.png"
        alt="example"
        styles="width:100%"
      />
      <h3>{exampleObject.exampleTitle}</h3>
      <p>{exampleObject.exampleShortDesc}</p>
    </div>
  );
}

export default GetExamplePage;
