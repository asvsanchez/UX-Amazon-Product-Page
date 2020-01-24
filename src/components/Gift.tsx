import React from "react";

interface IGift {}

interface IElements {
  showed: boolean;
}

class Gift extends React.Component<IGift, IElements> {

  /* eslint-disable-next-line */
  constructor(props: IGift) {
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
      <div
        id="gifting-option-container"
        className="a-section a-spacing-mini inline-popup-link"
      >
        <hr className="a-divider-normal" />
        <span
          className="a-declarative"
          data-action="mako-gifting-declarative"
          data-mako-gifting-declarative="{}"
        >
          <div data-a-input-name="gift-wrap" className="a-checkbox">
            <label>
              <input
                id="gift-wrap"
                type="checkbox"
                name="gift-wrap"
                value="yes"
              />
              <i className="a-icon a-icon-checkbox"></i>
              <span className="a-label a-checkbox-label">Es un regalo</span>
            </label>
          </div>
        </span>
      </div>

      <div
        id="preRegistration-container"
        className="a-section a-spacing-mini inline-popup-link"
      >
        <span
          className="a-declarative"
          data-action="mako-preReg-declarative"
          data-mako-preReg-declarative="{}"
        >
          <div data-a-input-name="account-linking" className="a-checkbox">
            <label>
              <input
                id="account-linking"
                type="checkbox"
                name="account-linking"
                value="yes"
                checked
              />
              <i className="a-icon a-icon-checkbox"></i>
              <span className="a-label a-checkbox-label">
                <span id="preRegCheckboxText">
                  Vincular con mi cuenta de Amazon para facilitar la
                  instalación.
                </span>
                <span
                  className="a-declarative"
                  data-action="preReg-popup-window"
                  data-preReg-popup-window='{"windowName":"PreRegistration","windowOptions":"width=800,height=600,scrollbars=yes"}'
                >
                  <span
                    className="a-declarative"
                    data-action="a-popover"
                    data-a-popover='{"name":"preRegistrationPopoverContent","position":"triggerBottom"}'
                  >
                    <a
                      href="/"
                      className="a-popover-trigger a-declarative"
                    >
                      <a
                        className="a-link-normal gifting-option-popup-link"
                        rel="noopener"
                        href="https://www.amazon.es/gp/help/customer/display.html/?nodeId=GMPKVYDBR223TRPY&pop-up=1"
                      >
                        ¿Porqué es esto importante?
                      </a>
                      <i className="a-icon a-icon-popover"></i>
                    </a>
                  </span>
                </span>
              </span>
            </label>
          </div>
        </span>
      </div>
    </div>
    : <div onClick={this.toggleShowed} className="a-divider a-divider-break abb-divider" id="show-gift">
    <h5>Añadir opciones de regalo</h5>
    </div> }
    </>
  );
  }
}

export default Gift;
