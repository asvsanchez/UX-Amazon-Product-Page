import React from "react";

interface IWish {
  wish: String;
}

class Wish extends React.Component<IWish, {}> {
  /* eslint-disable-next-line */
  constructor(props: IWish) {
    super(props);
    // change state
  }

  public render() {

    function showMore() {
      document.getElementById("items-wish").style.display="block";   
      document.getElementById("show-wish").style.display="none"; 
    }

    return (
      <>
      {/* eslint-disable-next-line */}
      <a href="#" onClick={showMore} id="show-wish">
      <div className="a-divider a-divider-break abb-divider">
        <h5>Añadir opciones de producto</h5>
      </div></a>
      <div id="items-wish">
        <hr/>
        <span
          className="a-declarative"
          data-action="dpContextualIngressPt"
          data-dpContextualIngressPt="{}"
        >
          <a className="a-link-normal" href="/">
            <div className="a-row a-spacing-mini">
              <div className="a-column a-span12 a-text-left">
                <div id="contextualIngressPt">
                  <div id="contextualIngressPtPin"></div>
                  <span id="contextualIngressPtLabel" className="a-size-small">
                    <div id="contextualIngressPtLabel_deliveryShortLine">
                      <span>{this.props.wish}</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </span>

        <hr className="a-spacing-base a-divider-normal" />

        <div
          id="add-to-wishlist-button-group"
          data-hover="&lt;!-- If PartialItemStateWeblab is true then, showing different Add-to-wish-list tool-tip message which is consistent with Add-to-Cart tool tip message.  --&gt;
            Para añadir a la Lista de deseos, elige entre las opciones a la izquierda"
          className="a-button-group a-declarative a-spacing-none"
          data-action="a-button-group"
          role="radiogroup"
        >
          <span
            id="wishListMainButton"
            className="a-button a-button-group-first a-spacing-none a-button-base"
            role="radio"
            aria-checked="false"
            aria-labelledby="wishListMainButton-announce"
          >
            <span className="a-button-inner">
              <input
                id="add-to-wishlist-button-submit"
                name="submit.add-to-registry.wishlist"
                title="Añadir a la Lista de deseos"
                data-action="atwl-splitbutton-main"
                data-hover="&lt;!-- If PartialItemStateWeblab is true then, showing different Add-to-wish-list tool-tip message which is consistent with Add-to-Cart tool tip message.  --&gt;
            Para añadir a la Lista de deseos, elige entre las opciones a la izquierda"
                className="a-button-input a-declarative"
                type="submit"
                aria-labelledby="wishListMainButton-announce"
              />
              <span
                id="wishListMainButton-announce"
                className="a-button-text a-text-left"
                aria-hidden="true"
              >
                Añadir a la Lista de deseos
                <span
                  className="a-declarative"
                  data-action="a-modal"
                  data-a-modal='{"padding":"none","cache":"false","name":"reg-create","width":"900","header":"Añadir a la Lista de deseos"}'
                  id="add-wishlist-declarative"
                ></span>
              </span>
            </span>
          </span>
          <span
            className="a-button a-button-dropdown a-button-group-last"
            id="wl-inline-wrapper"
          >
            <span
              id="wishListDropDown"
              className="a-button a-button-dropdown a-button-group-last a-spacing-none a-button-base wishlist-dropdown-button"
              role="radio"
              aria-checked="false"
              aria-labelledby="wishListDropDown-announce"
            >
              <span className="a-button-inner">
                <i className="a-icon a-icon-dropdown"></i>
                <input
                  id="add-to-wishlist-button"
                  name="submit.add-to-registry.wishlist"
                  data-action=""
                  data-type="wishlist"
                  data-ux-click=""
                  className="a-button-input"
                  type="submit"
                  aria-labelledby="wishListDropDown-announce"
                />
                <span
                  id="wishListDropDown-announce"
                  className="a-button-text a-text-left"
                  aria-hidden="true"
                ></span>
              </span>
            </span>
          </span>
        </div>
      </div>
      </>
    );
  }
}

export default Wish;
