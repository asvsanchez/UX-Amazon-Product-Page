import React from 'react';

const Price: React.FC = () => {
  return (
    <div>
      <div id="variation_style_name" className="a-section a-spacing-small">
        <div className="a-row a-spacing-micro singleton">
          <label className="a-form-label">
            Nombre de estilo:
        </label>
          <span className="selection">Fire TV Stick</span>
        </div>
      </div>
      <div id="unifiedPrice_feature_div" className="feature" data-feature-name="unifiedPrice">
        <div id="price" className="a-section a-spacing-small">
          <table className="a-lineitem">
            <tr id="priceblock_ourprice_row">
              <td id="priceblock_ourprice_lbl" className="a-color-secondary a-size-base a-text-right a-nowrap">Precio:</td>
              <td className="a-span12">
                <span id="priceblock_ourprice" className="a-size-medium a-color-price priceBlockBuyingPriceString">39,99 €</span>
                <span id="ourprice_shippingmessage">
                  <span id="priceBadging_feature_div" className="feature" data-feature-name="priceBadging">
                    <i className="a-icon-wrapper a-icon-prime-with-text a-color-secondary aok-nowrap"><i className="a-icon a-icon-prime" role="img" aria-label="GRATIS Envío 1 día"></i><span className="a-icon-text"> GRATIS Envío 1 día</span></i>
                  </span>
                </span>
              </td>
            </tr>
            <tr id="priceblock_snsupsell_row" className="aok-hidden">
              <td colSpan={2}>
                <span className="a-size-base a-color-price">
                </span>
              </td>
            </tr>
            <tr id="vatMessage">
              <td></td>
              <td>
                <span className="a-size-base">Precio final del producto</span>
              </td>
            </tr>
          </table>
        </div>
      </div></div>
  );
}

export default Price;
