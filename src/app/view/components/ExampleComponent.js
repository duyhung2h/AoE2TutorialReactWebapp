var exampleList = [];
for (let i = 0; i < 10; i++) {
  exampleList.unshift({
    exampleId: i,
    exampleTitle: "Example #" + i,
    exampleShortDesc:
      "description: Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
  });
  console.log(exampleList[i]);
}

function GetExamplePage(props) {
  const examplePageContent = [];
  exampleList.forEach((element) => {
    examplePageContent.push(
      <GetExampleComponent
        exampleId={element.exampleId}
        exampleTitle={element.exampleTitle}
        exampleShortDesc={element.exampleShortDesc}
      />
    );
  });
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
  return (
    <div className="w3-quarter">
      <img
        src="app/assets/images/example1.png"
        alt="example"
        styles="width:100%"
      />
      <h3>{props.exampleTitle}</h3>
      <p>{props.exampleShortDesc}</p>
    </div>
  );
}

export default GetExamplePage;
