import React from "react";

interface IImages {
  images_link: string[];
}

class Images extends React.Component<IImages, {}> {
  constructor(props: IImages) {
    super(props);
    // change state
  }

  public render() {
    return (
      <div>
        <ul className="a-unordered-list a-nostyle a-button-list a-vertical a-spacing-top-micro">
          <li className="a-spacing-small item">
            <span className="a-list-item">
              <span
                className="a-declarative"
                data-action="thumb-action"
                data-thumb-action='{"thumbnailIndex":"0","variant":"LEFT","index":"0","type":"image"}'
              >
                <span className="a-button a-button-selected a-button-thumbnail a-button-toggle a-button-focus">
                  <span className="a-button-inner">
                    <input className="a-button-input" type="submit" />
                    <span className="a-button-text" aria-hidden="true" />
                    <img alt="" src={this.props.images_link[0]} />
                  </span>
                </span>
              </span>
            </span>
          </li>
          <li className="a-spacing-small item">
            <span className="a-list-item">
              <span
                className="a-declarative"
                data-action="thumb-action"
                data-thumb-action='{"thumbnailIndex":"1","variant":"MAIN","index":"1","type":"image"}'
              >
                <span className="a-button a-button-thumbnail a-button-toggle">
                  <span className="a-button-inner">
                    <input className="a-button-input" type="submit" />
                    <span className="a-button-text" aria-hidden="true">
                      <img alt="" src={this.props.images_link[1]} />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </li>
          <li className="a-spacing-small item">
            <span className="a-list-item">
              <span
                className="a-declarative"
                data-action="thumb-action"
                data-thumb-action='{"thumbnailIndex":"2","variant":"PT01","index":"2","type":"image"}'
              >
                <span className="a-button a-button-thumbnail a-button-toggle">
                  <span className="a-button-inner">
                    <input className="a-button-input" type="submit" />
                    <span className="a-button-text" aria-hidden="true">
                      <img alt="" src={this.props.images_link[2]} />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </li>
          <li className="a-spacing-small item">
            <span className="a-list-item">
              <span
                className="a-declarative"
                data-action="thumb-action"
                data-thumb-action='{"thumbnailIndex":"3","variant":"PT02","index":"3","type":"image"}'
              >
                <span className="a-button a-button-thumbnail a-button-toggle">
                  <span className="a-button-inner">
                    <input className="a-button-input" type="submit" />
                    <span className="a-button-text" aria-hidden="true">
                      <img alt="" src={this.props.images_link[3]} />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </li>
          <li className="a-spacing-small videoCountTemplate aok-hidden">
            <span className="a-list-item">
              <span
                id="videoCount_template"
                className="a-size-mini a-color-secondary video-count a-text-bold a-nowrap"
              ></span>
            </span>
          </li>
          <li className="a-spacing-small 360IngressTemplate aok-hidden">
            <span className="a-list-item">
              <span
                className="a-declarative"
                data-action="thumb-action"
                data-thumb-action="{}"
              >
                <span className="a-button a-button-thumbnail a-button-toggle">
                  <span className="a-button-inner">
                    <input className="a-button-input" type="submit" />
                    <span className="a-button-text" aria-hidden="true">
                      <img alt="" src={this.props.images_link[4]} />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </li>
          <li className="a-spacing-small template">
            <span className="a-list-item">
              <span className="a-button a-button-thumbnail a-button-toggle">
                <span className="a-button-inner">
                  <input className="a-button-input" type="submit" />
                  <span className="a-button-text" aria-hidden="true">
                    <span className="placeHolder"></span>
                  </span>
                </span>
              </span>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Images;
