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
    return (
      <div
        id="featurebullets_feature_div"
        className="feature"
        data-feature-name="featurebullets"
      >
        <div
          id="feature-bullets"
          className="a-section a-spacing-medium a-spacing-top-small"
        >
          <ul className="a-unordered-list a-vertical a-spacing-none">
            {this.props.description_element.map(function(element, index) {
              return (
                <li>
                  <span className="a-list-item">{element}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Description;
