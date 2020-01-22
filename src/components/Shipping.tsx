import React from "react";

interface IShipping {
  hour_before: String;
  seller: String;
}

class Shipping extends React.Component<IShipping, {}> {
  constructor(props: IShipping) {
    super(props);
    // change state
  }

  public render() {
    return (
      <div>
        <div id="ddmDeliveryMessage" className="a-section a-spacing-mini">
          Entrega GRATIS <b>Mañana</b>
          <br />
          <span className="a-color-secondary">
            si haces el pedido en{" "}
            <span id="ddmFastestCountdown">{this.props.hour_before}</span>.
          </span>
          <a
            href="/gp/help/customer/display.html/ref=ddm_ft_dp?ie=UTF8&nodeId=200556720&pop-up=1#"
            target="AmazonHelp"
          >
            Ver detalles
          </a>
        </div>

        <div id="availability" className="a-section a-spacing-none">
          <span className="a-size-medium a-color-success">En stock.</span>
        </div>

        <div id="merchant-info" className="a-section a-spacing-mini">
          Vendido y enviado por {this.props.seller}.<span></span>
        </div>
      </div>
    );
  }
}

export default Shipping;
