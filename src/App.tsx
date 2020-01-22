import React from 'react';
import Client from './components/Client';
import Offers from './components/Offers';
import Devices from './components/Devices';
import Advertisement from './components/Advertisement';
import Images from './components/Images';
import Title from './components/Title';
import Review from './components/Review';
import Description from './components/Description';
import Cart from './components/Cart';
import Price from './components/Price';
import Gift from './components/Gift';
import Options from './components/Options';
import Social from './components/Social';
import Shipping from './components/Shipping';
import Wish from './components/Wish';

class App extends React.Component {
    
    public render() {
        return(
            <div id="ppd">
            <div id="rightCol" className="rightCol  ">
                <div id="atfRight1_feature_div" className="feature" data-feature-name="atfRight1">
                </div>
                <div id="atfRight2_feature_div" className="feature" data-feature-name="atfRight2">
                </div>
                <Social />
                <div id="buybox_feature_div" className="feature" data-feature-name="buybox">
                    <div id="buybox" data-isPartialSizeWeblab="false" className="a-section a-spacing-medium">
                        <form id="addToCart" action="/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance" className="a-content">
                            <input type="hidden" id="session-id" name="session-id" value="261-8173218-5181763"/>
                            <input type="hidden" id="ASIN" name="ASIN" value="B07PVCVBN7"/>
                            <input type="hidden" id="offerListingID" name="offerListingID" value="zUZDw0uIm6Bqn8Hw6C07aMjaF9cIqdRmqoHohHFwwcq2xy%2BYApOCAqNroP7FnbNVWnmaaQPAOvQfthsfvo9F2%2BZ7C7Be5Yhe1Bt06opYp2l9hWTSGNMX91HHV58L%2Bw%2Fx"/>
                            <input type="hidden" id="isMerchantExclusive" name="isMerchantExclusive" value="0"/>
                            <input type="hidden" id="merchantID" name="merchantID" value="A1AT7YVPFBWXBL"/>
                            <input type="hidden" id="isAddon" name="isAddon" value="0"/>
                            <input type="hidden" id="nodeID" name="nodeID" value="827230031"/>
                            <input type="hidden" id="sellingCustomerID" name="sellingCustomerID" value="A1AT7YVPFBWXBL"/>
                            <input type="hidden" id="qid" name="qid" value=""/>
                            <input type="hidden" id="sr" name="sr" value=""/>
                            <input type="hidden" id="storeID" name="storeID" value="amazon-smp"/>
                            <input type="hidden" id="tagActionCode" name="tagActionCode" value="827230031"/>
                            <input type="hidden" id="viewID" name="viewID" value="glance"/>
                            <input type="hidden" id="rebateId" name="rebateId" value=""/>
                            <input type="hidden" id="rsid" name="rsid" value="261-8173218-5181763"/>
                            <input type="hidden" id="sourceCustomerOrgListID" name="sourceCustomerOrgListID" value=""/>
                            <input type="hidden" id="sourceCustomerOrgListItemID" name="sourceCustomerOrgListItemID" value=""/>
                            <input type="hidden" name="wlPopCommand" value=""/>
                            <div className="a-box">
                                <div className="a-box-inner">
                                    <div className="a-section a-spacing-none a-padding-none">
                                        <div className="a-row a-spacing-mini">
                                            <div className="a-column a-span12 a-text-left a-spacing-small">
                                                <Cart />
                                            </div>
                                        </div>
                                        <div className="dp-cif aok-hidden" data-feature-details='{"name":"atc","isInteractive":false}'></div>
                                        <div id="buyNow" className="a-section a-spacing-base">
                                            <div id="turboState" className="a-section a-spacing-none a-padding-none">
                                            </div>
                                        </div>
                                        <div id="OneClickBox" className="a-button-stack">
                                            <div id="oneClickSignIn" className="a-section a-spacing-base a-text-center">
                                            </div>
                                        </div>
                                        <Gift />
                                        <div id="preRegistration-alert-container" className="a-section a-spacing-mini">
                                            <div id="preregistrationGiftingAlert" className="a-box a-alert-inline a-alert-inline-info aok-hidden">
                                                <div className="a-box-inner a-alert-container">
                                                    <i className="a-icon a-icon-alert"></i>
                                                    <div className="a-alert-content">
                                                        Has marcado esto como un regalo, de modo que no se vinculará a tu cuenta. Para vincularlo a tu cuenta, primero desmarca la casilla "Es un regalo".
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="preregistrationQuantityAlert" className="a-box a-alert-inline a-alert-inline-info aok-hidden">
                                                <div className="a-box-inner a-alert-container">
                                                    <i className="a-icon a-icon-alert"></i>
                                                    <div className="a-alert-content">
                                                        La vinculación de cuenta no está disponible con la compra de más de $PREREG_MAX_QUANTITY unidades de este artículo.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="a-section">
                                            <div id="accessory-upsell-ajax-home" className="aok-hidden"></div>
                                            <div id="accessory-upsell" className="a-section abb-container">
                                                <input type="hidden" name="verificationSessionID" value="261-8173218-5181763" id="verificationSessionID"/>
                                                <Options />
                                                <input type="hidden" name="itemCount" value="3"/>
                                                <div className="aok-hidden">
                                                    <div className="a-popover-preload" id="a-popover-abb-interstitial">
                                                        <div id="abb-interstitial" className="a-section abb-interstitial">
                                                            <div id="abb-intl-product-view-B01LXP5TXI" className="a-section abb-intl-product-view">
                                                                <div className="a-row">
                                                                    <div className="a-column a-span4 a-text-center abb-product-view-image-container">
                                                                        <img alt="" src="https://images-eu.ssl-images-amazon.com/images/I/31CCr6bDr7L._SL160_.jpg" className="abb-product-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/I/31CCr6bDr7L._SL500_.jpg"/>
                                                                    </div>
                                                                    <div className="a-column a-span8 a-span-last">
                                                                        <h3 className="a-spacing-none">
                                                                            <a className="a-link-normal abb-product-title" target="_blank" rel="noopener" href="/dp/B01LXP5TXI/ref=ods_dabb_B01LXP5TXI_productInfo">
                                                          Amazon - Adaptador Ethernet para Fire TV Stick | Basic
                                                          Edition
                                                       </a>
                                                                        </h3>
                                                                        <div className="a-section a-spacing-micro abb-product-merchant-container">
                                                                            <span className="a-color-secondary">
                                                          de
                                                          <span className="abb-product-merchant">Amazon.es</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="a-section a-spacing-base abb-product-price">
                                                                            <span className="a-size-medium a-color-secondary abb-product-list-price a-text-strike">
                                                       </span>
                                                                            <span className="a-size-medium a-color-price abb-product-buying-price">
                                                          EUR 14,99
                                                       </span>
                                                                        </div>
                                                                        <div className="a-section abb-product-feature-bullets">
                                                                            <ul>
                                                                                <li>Conecta el Fire TV Stick directamente al router con un cable Ethernet, sin necesidad de conexión wifi.
                                                                                </li>
                                                                                <li>Muy fácil de usar: conecta el adaptador Ethernet al Fire TV Stick, inserta el puerto del cable USB en el adaptador de corriente y el puerto del cable Ethernet en el
                                                                                    adaptador Ethernet y, por último, acopla el cable Ethernet al router.</li>
                                                                                <li>Disfruta de la velocidad y la fiabilidad de la conexión a Internet por cable.</li>
                                                                                <li>Compatible con el Fire TV Stick | Basic Edition, el Fire TV Stick (2.ª generación) y el Fire TV Stick 4K.</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="a-row">
                                                                    <div className="a-column a-span8 a-push4">
                                                                        <div className="a-section a-spacing-mini a-spacing-top-base abb-intl-product-cta">
                                                                            <div className="a-row a-spacing-top-base">
                                                                                <div data-asin="B01LXP5TXI" className="a-checkbox abb-intl-product-ato">
                                                                                    <label><input type="checkbox" name="" value=""/><i
                                                                   className="a-icon a-icon-checkbox"></i><span
                                                                   className="a-label a-checkbox-label">
                                                                   <span className="a-text-bold">Amazon - Adaptador
                                                                      Ethernet para Fire TV Stick | Basic
                                                                      Edition</span>
                                                                </span></label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="abb-intl-product-view-B078KSHVCS" className="a-section abb-intl-product-view">
                                                                <div className="a-row">
                                                                    <div className="a-column a-span4 a-text-center abb-product-view-image-container">
                                                                        <img alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41O3Hgw3otL._SL160_.jpg" className="abb-product-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/I/41O3Hgw3otL._SL500_.jpg"/>
                                                                    </div>
                                                                    <div className="a-column a-span8 a-span-last">
                                                                        <h3 className="a-spacing-none">
                                                                            <a className="a-link-normal abb-product-title" target="_blank" rel="noopener" href="/dp/B078KSHVCS/ref=ods_dabb_B078KSHVCS_productInfo">
                                                          Mission Cables MC45 - Cable USB de Corriente para el
                                                          Amazon Fire TV con 4K Ultra HD, Color Negro
                                                       </a>
                                                                        </h3>
                                                                        <div className="a-section a-spacing-micro abb-product-merchant-container">
                                                                            <span className="a-color-secondary">
                                                          de
                                                          <span className="abb-product-merchant">Amazon.es</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="a-section a-spacing-base abb-product-price">
                                                                            <span className="a-size-medium a-color-secondary abb-product-list-price a-text-strike">
                                                       </span>
                                                                            <span className="a-size-medium a-color-price abb-product-buying-price">
                                                          EUR 20,99
                                                       </span>
                                                                        </div>
                                                                        <div className="a-section abb-product-feature-bullets">
                                                                            <ul>
                                                                                <li>EVITAR ENREDOS: Suministra el Amazon Fire TV directamente a través del puerto USB del televisor con corriente. Ya no necesitarás un enchufe separado
                                                                                </li>
                                                                                <li>TECNOLOGÍA AVANZADA: incluye una gestión de energía especial que equilibra las fluctuaciones del suministro de corriente, almacenando la energía sobrante y liberándola
                                                                                    cuando sea necesario</li>
                                                                                <li>LONGITUD ÓPTIMA: Este cable es óptimo para conectar El Fire TV con El puerto USB del televisor
                                                                                </li>
                                                                                <li>UNIVERSAL: compatible con todo tipo de puerto USB
                                                                                </li>
                                                                                <li>el integrado acumulador de iones de litio posibilita el uso del Amazon Fire TV con cualquier puerto USB</li>
                                                                                <li>DISEÑO PATENTADO: producto innovador ideado especialmente para el suministro de corriente del Amazon Fire TV</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="a-row">
                                                                    <div className="a-column a-span8 a-push4">
                                                                        <div className="a-section a-spacing-mini a-spacing-top-base abb-intl-product-cta">
                                                                            <div className="a-row a-spacing-top-base">
                                                                                <div data-asin="B078KSHVCS" className="a-checkbox abb-intl-product-ato">
                                                                                    <label><input type="checkbox" name="" value=""/><i
                                                                   className="a-icon a-icon-checkbox"></i><span
                                                                   className="a-label a-checkbox-label">
                                                                   <span className="a-text-bold">Mission Cables MC45
                                                                      - Cable USB de Corriente para el Amazon
                                                                      Fire TV con 4K Ultra HD, Color
                                                                      Negro</span>
                                                                </span></label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="abb-intl-pop-cta" className="a-section a-spacing-base">
                                                                <div className="a-row">
                                                                    <div className="a-column a-span8 a-push4">
                                                                        <span className="a-button a-button-primary abb-intl-ato abb-intl-continue"><span
                                                          className="a-button-inner"><input className="a-button-input"
                                                             type="submit"/><span
                                                             className="a-button-text a-text-center"
                                                             aria-hidden="true">
                                                             Continuar
                                                          </span></span>
                                                                        </span>
                                                                        <span className="a-button a-button-base abb-intl-decline aok-hidden"><span
                                                          className="a-button-inner"><input className="a-button-input"
                                                             type="submit"/><span
                                                             className="a-button-text a-text-center"
                                                             aria-hidden="true">
                                                             No, gracias
                                                          </span></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a className="a-link-normal abb-open-interstitial aok-hidden" href="#"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Wish />
                                    <div className="a-popover-preload" id="a-popover-reg-create">
                                        <div id="popover-spinner" className="a-section">
                                            <div className="a-section a-padding-large a-popover-loading"></div>
                                        </div>
                                        <div id="WLHUC_result" className="a-section a-hidden wlAddCreatePop"></div>
                                        <div id="WLNEW_main" className="a-section a-hidden wlAddCreatePop"></div>
                                    </div>
                                    <div className="a-popover-preload" id="a-popover-firstAddCreateToWishlist">
                                        <div id="popover-spinner" className="a-section">
                                            <div className="a-section a-padding-large a-popover-loading"></div>
                                        </div>
                                        <div id="WLHUC_result" className="a-section a-hidden wlAddCreatePop"></div>
                                        <div id="WLNEW_main" className="a-section a-hidden wlAddCreatePop"></div>
                                    </div>
                                    <div id="wishlistButtonStack" className="a-button-stack">
                                        <div id="atwl-inline-spinner" className="a-section a-hidden">
                                            <div className="a-spinner-wrapper"><span className="a-spinner a-spinner-medium"></span>
                                            </div>
                                        </div>
                                        <div id="atwl-inline" className="a-section a-spacing-none a-hidden">
                                            <div className="a-row a-text-ellipsis">
                                                <div id="atwl-inline-sucess-msg" className="a-box a-alert-inline a-alert-inline-success">
                                                    <div className="a-box-inner a-alert-container">
                                                        <i className="a-icon a-icon-alert"></i>
                                                        <div className="a-alert-content">
                                                            <span className="a-size-base" role="alert">
                                           </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a id="atwl-inline-link" className="a-link-normal" href="/gp/registry/wishlist/">
                                                    <span id="atwl-inline-link-text" className="a-size-base" role="alert">
                                     </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div id="atwl-inline-error" className="a-section a-hidden">
                                            <div className="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert">
                                                <div className="a-box-inner a-alert-container">
                                                    <i className="a-icon a-icon-alert"></i>
                                                    <div className="a-alert-content">
                                                        <span id="atwl-inline-error-msg" className="a-size-base" role="alert">
                                           No se ha podido añadir el producto a la lista de deseos. Por favor,
                                           inténtalo de nuevo más tarde.
                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="atwl-dd-spinner-holder" className="a-section a-hidden">
                                            <div className="a-row a-dropdown">
                                                <div className="a-section a-popover-wrapper">
                                                    <div className="a-section a-text-center a-popover-inner">
                                                        <div className="a-box a-popover-loading">
                                                            <div className="a-box-inner">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="atwl-dd-error-holder" className="a-section a-hidden">
                                            <div className="a-section a-dropdown">
                                                <div className="a-section a-popover-wrapper">
                                                    <div className="a-section a-spacing-base a-padding-base a-text-left a-popover-inner">
                                                        <h3 className="a-color-error">
                                                        </h3>
                                                        <span>
                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="atwl-dd-unavail-holder" className="a-section a-hidden">
                                            <div className="a-section a-dropdown">
                                                <div className="a-section a-popover-wrapper">
                                                    <div className="a-section a-spacing-base a-padding-base a-text-left a-popover-inner">
                                                        <h3 className="a-color-error">
                                                        </h3>
                                                        <span>
                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="olpLinkWidget_feature_div" className="feature" data-feature-name="olpLinkWidget">
                </div>
                <div id="buyBoxUpsell_feature_div" className="feature" data-feature-name="buyBoxUpsell">
                </div>
                <div id="accessoryUpsell_feature_div" className="feature" data-feature-name="accessoryUpsell">
                </div>
                <div id="upsellModuleExecutor_feature_div" className="feature" data-feature-name="upsellModuleExecutor">
                </div>
                <div id="atfRight3_feature_div" className="feature" data-feature-name="atfRight3">
                </div>
                <div id="atfRight4_feature_div" className="feature" data-feature-name="atfRight4">
                </div>
                <div id="pocs_feature_div" className="feature" data-feature-name="pocs">
                </div>
                <div id="moreBuyingChoicesPocs_feature_div" className="feature" data-feature-name="moreBuyingChoicesPocs">
                </div>
                <div id="atfRight5_feature_div" className="feature" data-feature-name="atfRight5">
                </div>
                <div id="atfRight6_feature_div" className="feature" data-feature-name="atfRight6">
                </div>
            </div>
            <div id="leftCol" className="leftCol">
                <div id="atfLeft1_feature_div" className="feature" data-feature-name="atfLeft1">
                </div>
                <div id="atfLeft2_feature_div" className="feature" data-feature-name="atfLeft2">
                </div>
                <div id="imageBlock_feature_div" className="feature" data-feature-name="imageBlock">
                    <div id="imageBlock" aria-hidden="true" className="a-section imageBlockRearch">
                        <div className="a-fixed-left-grid">
                            <div className="a-fixed-left-grid-inner" style={{paddingLeft: "58px"}}>
                                <div id="altImages" className="a-fixed-left-grid-col a-col-left" style={{width:"58px", marginLeft:"-58px", float:"left"}}>
                                    <Images />
                                </div>
                                <div className="a-text-center a-fixed-left-grid-col a-col-right" style={{paddingLeft: "3.5%", float: "left"}}>
                                    <div className="a-row a-spacing-none a-grid-vertical-align a-grid-center canvas ie7-width-96">
                                        <div id="main-image-container" className="a-dynamic-image-container">
                                            <div id="video-outer-container">
                                                <div id="main-video-container">
                                                </div>
                                                <div id="video-canvas-caption" className="a-row">
                                                    <div className="a-column a-span12 a-text-center">
                                                        <span id="videoCaption" className="a-color-secondary"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="a-hidden" id="auiImmersiveViewDiv"></div>
                                            <div className="variationUnavailable unavailableExp">
                                                <div className="inner">
                                                    <div className="a-box a-alert a-alert-error" aria-live="assertive" role="alert">
                                                        <div className="a-box-inner a-alert-container">
                                                            <h4 className="a-alert-heading">Imagen no disponible</h4>
                                                            <i className="a-icon a-icon-alert"></i>
                                                            <div className="a-alert-content">
                                                                <span className="a-text-bold">
                                                 Imagen no disponible del<br />Color:
                                                 <span className="unvailableVariation"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="photo"></div>
                                            <ul className="a-unordered-list a-nostyle a-horizontal list maintain-height">
                                                <li className="image item itemNo0 selected maintain-height">
                                                    <span className="a-list-item">
                                        <span className="a-declarative" data-action="main-image-click"
                                           data-main-image-click="{}">
                                           <div id="imgTagWrapperId" className="imgTagWrapper">
                                              <img
                                                 alt="Amazon Fire TV Stick con mando por voz Alexa | Reproductor de contenido multimedia en streaming"
                                                 src="https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY300_.jpg"
                                                 data-old-hires="https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SL1500_.jpg"
                                                 className="a-dynamic-image" id="landingImage"
                                                 data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX466_.jpg&quot;:[466,466],&quot;https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY450_.jpg&quot;:[450,450],&quot;https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX569_.jpg&quot;:[569,569],&quot;https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY355_.jpg&quot;:[355,355],&quot;https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX425_.jpg&quot;:[425,425],&quot;https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX679_.jpg&quot;:[679,679],&quot;https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX522_.jpg&quot;:[522,522]}"
                                                 style={{maxWidth:"679px", maxHeight:"679px"}}/>
                                           </div>
                                        </span>
                                                    </span>
                                                </li>
                                                <li className="mainImageTemplate template">
                                                    <span className="a-list-item">
                                        <span className="a-declarative" data-action="main-image-click"
                                           data-main-image-click="{}">
                                           <div className="imgTagWrapper">
                                              <span className="placeHolder"></span>
                                        </div>
                                        </span>
                                        </span>
                                        </li>
                                        <li className="swatchHoverExp a-hidden maintain-height">
                                            <span className="a-list-item">
                                        <span className="a-declarative" data-action="main-image-click"
                                           data-main-image-click="{}">
                                           <div className="imgTagWrapper">
                                              <span className="placeHolder"></span>
                                    </div>
                                    </span>
                                    </span>
                                    </li>
                                    <li id="noFlashContent" className="noFlash a-hidden">
                                        <span className="a-list-item">
                                        <a className="a-link-normal" target="_blank" rel="noopener"
                                           href="https://get.adobe.com/flashplayer">
                                           <span className="swSprite s_extLink"></span>
                                        </a>
                                        </span>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="image-canvas-caption" className="a-row">
                                <div className="a-column a-span12 a-text-center">
                                    <span id="canvasCaption" className="a-color-secondary"></span>
                                </div>
                            </div>
                            <div className="collections-collect-button"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="twister-main-image" className="a-hidden">
            </div>
            <div id="thumbs-image" className="a-hidden">
            </div>
            <div className="a-popover-preload" id="a-popover-immersiveView">
                <div id="iv-tab-view-container">
                    <ul className="iv-tab-views a-declarative">
                        <li id="ivVideosTabHeading" className="iv-tab-heading">
                            <a href="#" data-iv-tab-view="ivVideosTab">
                            VÍDEOS
                         </a>
                        </li>
                        <li id="iv360TabHeading" className="iv-tab-heading">
                            <a href="#" data-iv-tab-view="iv360Tab">
                            VISTA EN 360º
                         </a>
                        </li>
                        <li id="ivImagesTabHeading" className="iv-tab-heading">
                            <a href="#" data-iv-tab-view="ivImagesTab">
                            IMÁGENES
                         </a>
                        </li>
                    </ul>
                    <div id="ivVideosTab" className="iv-box iv-box-tab iv-tab-content">
                        <div className="iv-box-inner">
                            <div id="ivVideoBlock">
                                <div id="ivVideoBlockSpinner" className="a-spinner-wrapper"><span className="a-spinner a-spinner-medium"></span></div>
                            </div>
                        </div>
                    </div>
                    <div id="iv360Tab" className="iv-box iv-box-tab iv-tab-content">
                        <div className="iv-box-inner">
                            <div id="ivMain360">
                                <div id="ivStage360">
                                    <div id="ivLarge360"></div>
                                </div>
                                <div id="ivThumbColumn360">
                                    <div id="ivTitle360"></div>
                                    <div id="ivVariationSelection360"></div>
                                    <div id="ivThumbs360">
                                        <div className="ivRow placeholder"></div>
                                        <div className="ivThumb placeholder">
                                            <div className="ivThumbImage"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ivClearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div id="ivImagesTab" className="iv-box iv-box-tab iv-tab-content">
                        <div className="iv-box-inner">
                            <div id="ivMain">
                                <div id="ivStage">
                                    <div id="ivLargeImage"></div>
                                </div>
                                <div id="ivThumbColumn">
                                    <div id="ivTitle"></div>
                                    <div id="ivVariationSelection"></div>
                                    <div id="ivThumbs">
                                        <div className="ivRow placeholder"></div>
                                        <div className="ivThumb placeholder">
                                            <div className="ivThumbImage"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ivClearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dp-cif aok-hidden" data-feature-details='{"name":"imageblock","hasComponents":true,"components":[{"name":"mainimage","events":["click","hover"]},{"name":"thumbnail","events":["click","hover"]}]}'>
            </div>
        </div>
        <div id="atfLeft3_feature_div" className="feature" data-feature-name="atfLeft3">
        </div>
        <div id="atfLeft4_feature_div" className="feature" data-feature-name="atfLeft4">
        </div>
        <div id="alexaInteractionCannedPpdLeft_feature_div" className="feature" data-feature-name="alexaInteractionCannedPpdLeft">
        </div>
    </div>
    <div id="centerCol" className="centerColAlign  ">
        <div id="atfCenter1_feature_div" className="feature" data-feature-name="atfCenter1">
        </div>
        <div id="atfCenter2_feature_div" className="feature" data-feature-name="atfCenter2">
        </div>
        <Title />
        <div id="qpeTitleTag_feature_div" className="feature" data-feature-name="qpeTitleTag">
        </div>
        <Review />
        <div id="primeExclusiveBadge_feature_div" className="feature" data-feature-name="primeExclusiveBadge">
        </div>
        <div id="sharkBadge_feature_div" className="feature" data-feature-name="sharkBadge">
        </div>
        <div id="zeitgeistBadge_feature_div" className="feature" data-feature-name="zeitgeistBadge">
        </div>
        <div id="atfCenter3_feature_div" className="feature" data-feature-name="atfCenter3">
        </div>
        <div id="atfCenter4_feature_div" className="feature" data-feature-name="atfCenter4">
        </div>
        <Price />
        <div id="customPriceMessaging_feature_div" className="feature" data-feature-name="customPriceMessaging">
        </div>
        <div id="pmpux_feature_div" className="feature" data-feature-name="pmpux">
        </div>
        <div id="issuancePriceblockAmabot_feature_div" className="feature" data-feature-name="issuancePriceblockAmabot">
            <div>
            </div>
        </div>
        <div id="alternativeOfferEligibilityMessaging_feature_div" className="feature" data-feature-name="alternativeOfferEligibilityMessaging">
        </div>
        <div id="promiseBasedBadge_feature_div" className="feature" data-feature-name="promiseBasedBadge">
            <div id="dynamicDeliveryMessage" className="a-section a-spacing-mini a-spacing-top-mini">
            </div>
        </div>
        <div id="atfCenter5_feature_div" className="feature" data-feature-name="atfCenter5">
        </div>
        <div id="atfCenter6_feature_div" className="feature" data-feature-name="atfCenter6">
        </div>
        <div id="availability_feature_div" className="feature" data-feature-name="availability">
            <Shipping />
            <div className="a-section a-spacing-none">
            </div>
        </div>
        <div id="holidayDeliveryMessage_feature_div" className="feature" data-feature-name="holidayDeliveryMessage">
        </div>
        <div id="dynamicDeliveryMessage_feature_div" className="feature" data-feature-name="dynamicDeliveryMessage">
        </div>
        <div id="shipsFromSoldBy_feature_div" className="feature" data-feature-name="shipsFromSoldBy">
        </div>
        <div id="amazonDeviceAdditionalAvailabilityMessaging_feature_div" className="feature" data-feature-name="amazonDeviceAdditionalAvailabilityMessaging">
        </div>
        <div id="holidayAvailabilityMessage_feature_div" className="feature" data-feature-name="holidayAvailabilityMessage">
        </div>
        <div id="atfCenter7_feature_div" className="feature" data-feature-name="atfCenter7">
        </div>
        <div id="atfCenter8_feature_div" className="feature" data-feature-name="atfCenter8">
        </div>
        <div id="olpPocs_feature_div" className="feature" data-feature-name="olpPocs">
        </div>
        <div id="twister_feature_div" className="feature" data-feature-name="twister">
            <div id="twisterContainer" className="addTwisterMargin" style={{maxWidth:"none"}}>
                <form id="twister" action="/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance" method="post" className="a-section a-spacing-small   ">
                    <span id="twisterNonJsData">
                      <input type="hidden" name="ASIN" value="B07X2YMW9G"/>
                      <input type="hidden" name="twisterDimKeys" value="style_name"/>
                      <input type="hidden" name="noOfDims" value="1"/>
                      <input type="hidden" name="" id="dummySubmitButton"/>
                   </span>
                </form>
            </div>
            <div className="dp-cif aok-hidden" data-feature-details='{"name":"twister","hasComponents":true,"components":[  {"name":"singleton","isInteractive":false}]}'>
            </div>
        </div>
        <div id="alexaInteractionCannedAtfCenter_feature_div" className="feature" data-feature-name="alexaInteractionCannedAtfCenter">
        </div>
        <div id="specialOffersInformation_feature_div" className="feature" data-feature-name="specialOffersInformation">
        </div>
        <div id="clickToContact_feature_div" className="feature" data-feature-name="clickToContact">
        </div>
        <div id="atfCenter9_feature_div" className="feature" data-feature-name="atfCenter9">
        </div>
        <div id="atfCenter10_feature_div" className="feature" data-feature-name="atfCenter10">
        </div>
        <div id="extendWhatYouOwn_feature_div" className="feature" data-feature-name="extendWhatYouOwn">
        </div>
        <div id="smartHomeWidget_feature_div" className="feature" data-feature-name="smartHomeWidget">
        </div>
        <div id="valuePick_feature_div" className="feature" data-feature-name="valuePick">
        </div>
        <Description />
        <div id="jumpLinks_feature_div" className="feature" data-feature-name="jumpLinks">
        </div>
        <div id="atfCenter11_feature_div" className="feature" data-feature-name="atfCenter11">
        </div>
        <div id="atfCenter12_feature_div" className="feature" data-feature-name="atfCenter12">
        </div>
        <div id="addOnItem_feature_div" className="feature" data-feature-name="addOnItem">
        </div>
        <div id="andonCord_feature_div" className="feature" data-feature-name="andonCord">
        </div>
        <div id="atfCenter13_feature_div" className="feature" data-feature-name="atfCenter13">
            <hr className="a-divider-normal"/>
            <div className="a-section a-spacing-base">
                <div className="a-fixed-left-grid universal_hqp_grid_clear_fix">
                    <div className="a-fixed-left-grid-inner" style={{paddingLeft:"75px"}}>
                        <div className="a-fixed-left-grid-col a-col-left" style={{width:"75px", marginLeft:"-75px", float:"left"}}>
                            <a className="a-link-normal" href="https://www.amazon.es/gp/product/B07PW9VBK5?pf_rd_i=B07PVCVBN7&pf_rd_m=A1AT7YVPFBWXBL&pf_rd_p=4482d36c-6f13-4f4a-8a5b-f2595c611273&pf_rd_r=E81T54FVZ2MDMD0N7JR7&pf_rd_s=atf-center-13&pf_rd_t=201">
                                <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/30/kindle/dp/2019/53663101/mantis-comp_chart_image._CB438098108_.png" height="75" width="75"/>
                            </a>
                        </div>
                        <div className="a-fixed-left-grid-col a-col-right" style={{paddingLeft:"3.5%", float:"left"}}>
                            <div className="a-row">
                                <span className="a-text-bold">Streaming con 4K</span>
                            </div>
                            <div className="a-row">
                                Fire TV Stick 4K: El reproductor de contenido multimedia en streaming 4K más potente, ahora optimizado para la reproducción en streaming Ultra HD 4K.
                                <a className="a-link-normal" title="Streaming con 4K" href="https://www.amazon.es/gp/product/B07PW9VBK5?pf_rd_i=B07PVCVBN7&pf_rd_m=A1AT7YVPFBWXBL&pf_rd_p=4482d36c-6f13-4f4a-8a5b-f2595c611273&pf_rd_r=E81T54FVZ2MDMD0N7JR7&pf_rd_s=atf-center-13&pf_rd_t=201">Más
                               información.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="atfCenter14_feature_div" className="feature" data-feature-name="atfCenter14">
        </div>
        <div id="ageWarning_feature_div" className="feature" data-feature-name="ageWarning">
        </div>
        <div id="newerVersion_feature_div" className="feature" data-feature-name="newerVersion">
        </div>
        <div id="whiteGloveMessage_feature_div" className="feature" data-feature-name="whiteGloveMessage">
        </div>
        <div id="productAlert_feature_div" className="feature" data-feature-name="productAlert">
        </div>
        <div id="atfCenter15_feature_div" className="feature" data-feature-name="atfCenter15">
        </div>
        <div id="atfCenter16_feature_div" className="feature" data-feature-name="atfCenter16">
        </div>
    </div>
    <div id="hqpWrapper" className="centerColAlign  "></div>
</div>
        );
    }
}

export default App;