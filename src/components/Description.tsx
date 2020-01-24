import React from "react";

interface IDescription {
  description_element: String[];
}

class Description extends React.Component<IDescription, {}> {
  /* eslint-disable-next-line */
  constructor(props: IDescription) {
    super(props);
    // change state
  }

  public render() {

    function showMore() {
      document.getElementById("items-description").style.display="block";   
      document.getElementById("show-more").style.display="none"; 
    }
  
    function showLess() {
      document.getElementById("items-description").style.display="none";
      document.getElementById("show-more").style.display="inline";
    }

    const elements = [1, 2, 3, 4, 5];

    return (
      <div
        id="featurebullets_feature_div"
        className="feature"
        data-feature-name="featurebullets"
      >
        <hr/>
        <div
          id="feature-bullets"
          className="a-section a-spacing-medium a-spacing-top-small"
        >
          <p className="a-list-item"><b>{this.props.description_element[0]}</b></p>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={showMore} id="show-more">[mostrar más]</a>
          <div id="items-description">
          {elements.map((element) =>
            <p className="a-list-item">{this.props.description_element[element]}</p>
          )}
          <p className="a-list-item">{this.props.description_element[6]}</p>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={showLess} id="show-less">[mostrar menos]</a>
        </div>
        
        </div>
      </div>
    );
  }
}

export default Description;
