import React from "react";

interface IOptions {
  option_element: String[];
}

interface IElements {
  showed: boolean;
}

class Options extends React.Component<IOptions, IElements> {

  /* eslint-disable-next-line */
  constructor(props: IOptions) {
    super(props);
    this.state = {showed: false}
  }

  public toggleShowed = () => {
    this.setState({showed: !!!this.state.showed});
  }

  public render() {

    return (
      <>

      {this.state.showed ?

      <div>
        <div className="a-divider a-divider-break abb-divider"/>
        <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none">
          <li
            id="abb-option-B01LXP5TXI"
            data-asin="B01LXP5TXI"
            className="a-spacing-mini abb-option"
          >
            <span className="a-list-item">
              <div
                data-a-input-name="offeringID.1"
                className="a-checkbox abb-option-checkbox"
              >
                <label>
                  <input
                    id="abb-option-offerId-B01LXP5TXI"
                    type="checkbox"
                    name="offeringID.1"
                    value="3g3Pxs1RAlG9KY7vdFG2kHEt8Kg9VZQtvMRoFP13e2WRmh9eNx98oda965R8EC2Z6I8ie5UFJb0QVwhDaw2gH4UIt7jWM9S4TguqGJ7vF8Lz6Rd3iJNzCWzPNN5zVHz2"
                  />
                  <i className="a-icon a-icon-checkbox"></i>
                  <span className="a-label a-checkbox-label">
                    <input
                      type="hidden"
                      name="asin.1"
                      value="B01LXP5TXI"
                      id="abb-option-B01LXP5TXI-asin"
                    />
                    <input
                      type="hidden"
                      name="quantity.1"
                      value="1"
                      id="abb-option-checkbox-B01LXP5TXI"
                    />
                    <a
                      id="abb-popover-trigger-B01LXP5TXI"
                      className="a-link-normal abb-list-title-no-variation"
                      target="_blank"
                      rel="noopener"
                      href="/dp/B01LXP5TXI/ref=ods_dabb_B01LXP5TXI_productInfo"
                    >
                      {this.props.option_element[0]}
                    </a>
                    <span className="a-color-price abb-option-buying-price">
                      {this.props.option_element[1]}
                    </span>
                  </span>
                </label>
              </div>
            </span>
          </li>
          <li
            id="abb-option-B078KSHVCS"
            data-asin="B078KSHVCS"
            className="a-spacing-mini abb-option"
          >
            <span className="a-list-item">
              <div
                data-a-input-name="offeringID.2"
                className="a-checkbox abb-option-checkbox"
              >
                <label>
                  <input
                    id="abb-option-offerId-B078KSHVCS"
                    type="checkbox"
                    name="offeringID.2"
                    value="18s49B%2BAhOPUD1eFfJDhdKvPDAjgIsr9O2S6rlnbS9CrISF3RsoAzdvstBPVCOdgUncQttR2h0hPSaugH1gcbXF365miNDh0zvprNETvQqgYlqKrGrGY%2Fu%2F7rXYSS%2FrA"
                  />
                  <i className="a-icon a-icon-checkbox"></i>
                  <span className="a-label a-checkbox-label">
                    <input
                      type="hidden"
                      name="asin.2"
                      value="B078KSHVCS"
                      id="abb-option-B078KSHVCS-asin"
                    />
                    <input
                      type="hidden"
                      name="quantity.2"
                      value="1"
                      id="abb-option-checkbox-B078KSHVCS"
                    />
                    <a
                      id="abb-popover-trigger-B078KSHVCS"
                      className="a-link-normal abb-list-title-no-variation"
                      target="_blank"
                      rel="noopener"
                      href="/dp/B078KSHVCS/ref=ods_dabb_B078KSHVCS_productInfo"
                    >
                      {this.props.option_element[2]}
                    </a>
                    <span className="a-color-price abb-option-buying-price">
                      {this.props.option_element[3]}
                    </span>
                  </span>
                </label>
              </div>
            </span>
          </li>
        </ul>
      </div>
      : <div onClick={this.toggleShowed} className="a-divider a-divider-break abb-divider" id="show-options">
      <h5>Añadir más productos</h5>
      </div> }
      </>
    );
  }
}

export default Options;
