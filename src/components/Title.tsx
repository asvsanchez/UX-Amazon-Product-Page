import React from "react";

interface ITitle {
  title: String;
}

class Title extends React.Component<ITitle, {}> {
  /* eslint-disable-next-line */
  constructor(props: ITitle) {
    super(props);
    // change state
  }

  public render() {
    return (
      <div>
        <div
          id="bylineInfo_feature_div"
          className="feature"
          data-feature-name="bylineInfo"
        >
          <div className="a-section a-spacing-none">
            <a
              id="bylineInfo"
              className="a-link-normal"
              href="/"
            >
              de Amazon
            </a>
          </div>
        </div>
        <div
          id="title_feature_div"
          className="feature"
          data-feature-name="title"
        >
          <div id="titleSection" className="a-section a-spacing-none">
            <h1 id="title" className="a-size-large a-spacing-none">
              <span id="productTitle" className="a-size-large">
                {this.props.title}
              </span>
            </h1>
            <div
              id="expandTitleToggle"
              className="a-section a-spacing-none expand aok-hidden"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
