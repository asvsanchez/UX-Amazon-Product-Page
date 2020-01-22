import React from "react";

const Photo: React.FC = () => {
  return (
    <ul className="a-unordered-list a-nostyle a-horizontal list maintain-height">
      <li className="image item itemNo0 selected maintain-height">
        <span className="a-list-item">
          <span
            className="a-declarative"
            data-action="main-image-click"
            data-main-image-click="{}"
          >
            <div id="imgTagWrapperId" className="imgTagWrapper">
              <img
                alt="Amazon Fire TV Stick con mando por voz Alexa | Reproductor de contenido multimedia en streaming"
                src="https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY300_.jpg"
                data-old-hires="https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SL1500_.jpg"
                className="a-dynamic-image"
                id="landingImage"
                data-a-dynamic-image='{"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX679_.jpg":[679,679],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX522_.jpg":[522,522]}'
                style={{ maxWidth: "679px", maxHeight: "679px" }}
              />
            </div>
          </span>
        </span>
      </li>
      <li className="mainImageTemplate template">
        <span className="a-list-item">
          <span
            className="a-declarative"
            data-action="main-image-click"
            data-main-image-click="{}"
          >
            <div className="imgTagWrapper">
              <span className="placeHolder"></span>
            </div>
          </span>
        </span>
      </li>
      <li className="swatchHoverExp a-hidden maintain-height">
        <span className="a-list-item">
          <span
            className="a-declarative"
            data-action="main-image-click"
            data-main-image-click="{}"
          >
            <div className="imgTagWrapper">
              <span className="placeHolder"></span>
            </div>
          </span>
        </span>
      </li>
      <li id="noFlashContent" className="noFlash a-hidden">
        <span className="a-list-item">
          <a
            className="a-link-normal"
            rel="noopener"
            href="https://get.adobe.com/flashplayer"
          >
            <span className="swSprite s_extLink"></span>
          </a>
        </span>
      </li>
    </ul>
  );
};

export default Photo;
