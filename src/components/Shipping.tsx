import React from 'react';

const Shipping: React.FC = () => {
  return (
    <div>

    <div id="ddmDeliveryMessage" className="a-section a-spacing-mini">
      Entrega GRATIS <b>Mañana</b>
      <br/>
      <span className="a-color-secondary">
        si haces el pedido en <span id="ddmFastestCountdown">6 hrs y 46 mins</span>.
      </span>
      <a href='/gp/help/customer/display.html/ref=ddm_ft_dp?ie=UTF8&nodeId=200556720&pop-up=1#' target='AmazonHelp'>Ver detalles</a>
    </div>

    <div id="availability" className="a-section a-spacing-none">
    <span className="a-size-medium a-color-success">
            En stock.
    </span>
    </div>

    <div id="merchant-info" className="a-section a-spacing-mini">
    Vendido y enviado por Amazon EU Sarl.
    <span>
    </span>
    </div>

    </div>
  );
}

export default Shipping;
