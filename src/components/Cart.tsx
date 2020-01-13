import React from 'react';

const Cart: React.FC = () => {
  return (
    <div>
    <div id="selectQuantity" className="a-section a-spacing-none a-padding-none">
    <span className="a-declarative" data-action="quantity-dropdown" data-quantity-dropdown="{}">
        <div className="a-row a-spacing-base">
            <div className="a-column a-span12 a-text-left">
                <span className="a-dropdown-container"><label className="a-native-dropdown">Cantidad:</label><select name="quantity" id="quantity" className="a-native-dropdown">
                                <option value="1" selected>1
                                </option>
                                <option value="2">2
                                </option>
                                <option value="3">3
                                </option>
                </select><span className="a-button a-button-dropdown a-button-small"><span className="a-button-inner"><span className="a-button-text a-declarative" data-action="a-dropdown-button" role="button" aria-hidden="true"><span className="a-dropdown-label">Cantidad:</span><span className="a-dropdown-prompt">1</span></span><i className="a-icon a-icon-dropdown"></i></span></span></span>
            </div>
        </div>
    </span>
</div>

<div className="a-button-stack">
  <span id="submit.add-to-cart" className="a-button a-spacing-small a-button-primary a-button-icon">
    <span className="a-button-inner">
      <i className="a-icon a-icon-cart"></i>
      <input id="add-to-cart-button" name="submit.add-to-cart" title="Añadir a la cesta" data-hover="Seleccione &lt;b&gt;__dims__&lt;/b&gt; a la izquierda&lt;br&gt; para añadir a la cesta." className="a-button-input" type="submit" value="Añadir a la cesta" aria-labelledby="submit.add-to-cart-announce"/>
      <span id="submit.add-to-cart-announce" className="a-button-text" aria-hidden="true">Añadir a la cesta</span></span></span>
</div>

<div className="a-button-stack">
  <span className="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;turbo&quot;}" id="turbo-checkout-modal"></span>
    <span id="submit.buy-now" className="a-button a-button-icon a-button-oneclick onml-buy-now-button">
    <span className="a-button-inner">
    <i className="a-icon a-icon-buynow" role="img"></i>
    <input id="buy-now-button" name="submit.buy-now" className="a-button-input" type="submit"/>
    <span id="submit.buy-now-announce" className="a-button-text" aria-hidden="true">Comprar ya</span>
    </span>
  </span>
  </div>
</div>
  );
}

export default Cart;
