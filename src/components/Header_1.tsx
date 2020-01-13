import React from 'react';

const Header_1: React.FC = () => {
  return (

      <div id='nav-belt'>
      <div className='nav-left'>
        
  <a href="/gp/site-directory?ref_=nav_em_js_disabled" id="nav-hamburger-menu" role="button" aria-label="Abrir menú">
    <i className="hm-icon nav-sprite"></i>
  </a>


  <div id="nav-logo" className="nav-prime-1">
    <a href="/ref=nav_logo" className="nav-logo-link" aria-label="Amazon.es" >
      <span className="nav-sprite nav-logo-base"></span>
      <span className="nav-sprite nav-logo-ext"></span>
      <span className="nav-sprite nav-logo-locale"></span>
    </a>
  <a href="/ref=nav_logo_prime" aria-label="Prime" className="nav-sprite nav-logo-tagline">
  </a>
  </div>
      </div>
      <div className='nav-right'>
          
          <div id='nav-tools' className="layoutToolbarPadding">
<a href="https://www.amazon.es/gp/css/homepage.html?ref_=nav_youraccount_btn" className="nav-a nav-a-2 nav-truncate  " data-nav-ref="nav_ya_signin"  data-nav-role="signin" data-ux-jq-mouseenter="true" id="nav-link-accountList">
  <span className="nav-line-1">Hola Alejandro</span>
  <span className="nav-line-2 ">Cuenta y listas<span className="nav-icon nav-arrow"></span>
  </span>
  <span className="nav-line-3">Hola Alejandro</span>
  <span className="nav-line-4">Cuenta y listas</span>
</a>
<a href="/gp/flex/sign-out.html?path=%2Fgp%2Fyourstore%2Fhome&signIn=1&useRedirectOnSuccess=1&action=sign-out&ref_=nav_signout" className="nav-hidden-aria  ">
  ¿No eres Alejandro? Cerrar sesión
</a>
<a href="/gp/css/order-history?ref_=nav_orders_first" className="nav-a nav-a-2  " id="nav-orders">
  <span className="nav-line-1">Devoluciones</span>
  <span className="nav-line-2">y Pedidos
</span>
</a>
<a href="/prime?ref_=nav_prime_member_btn" className="nav-a nav-a-2  " data-ux-jq-mouseenter="true" id="nav-link-prime">
  <span className="nav-line-1">Mi</span>
  <span className="nav-line-2 ">Prime<span className="nav-icon nav-arrow"></span>
  </span>
</a>
  <a href="https://www.amazon.es/gp/cart/view.html?ref_=nav_cart" aria-label="0 artículos en la cesta" className="nav-a nav-a-2" id="nav-cart">
    <span aria-hidden="true" className="nav-line-1"> </span>
    <span aria-hidden="true" className="nav-line-2">Cesta<span className="nav-icon nav-arrow"></span>
    </span>
    <span className="nav-cart-icon nav-sprite"></span>
    <span id="nav-cart-count" aria-hidden="true" className="nav-cart-count nav-cart-0">0</span>
  </a>
          </div>
          
      </div>
      <div className='nav-fill'>
        
<div id="nav-search">
  <div id="nav-bar-left"></div>
  <form
    accept-charset="utf-8"
    action="/s/ref=nb_sb_noss"
    className="nav-searchbar"
    method="GET"
    name="site-search"
    role="search"
  >
    <input type="hidden" name="__mk_es_ES" value="ÅMÅŽÕÑ"/>
    <div className="nav-left">
      <div id="nav-search-dropdown-card">
  <div className="nav-search-scope nav-sprite">
    <div className="nav-search-facade" data-value="search-alias=aps">
      <span className="nav-search-label">Dispositivos de Amazon</span>
      <i className="nav-icon"></i>
    </div>
    <span id="searchDropdownDescription" style={{display:"none"}}>Selecciona el departamento que quieras buscar</span>
    <select
      aria-describedby="searchDropdownDescription"
      className="nav-search-dropdown searchSelect"
      data-nav-digest="kJ2uGs/6Z6b/pt4eSe3AdFWpldE="
      data-nav-selected="13"
      id="searchDropdownBox"
      name="url"
      style={{display: "block"}}
      title="Buscar en"
    >
        <option value="search-alias=aps">Todos los departamentos</option>
        <option value="search-alias=alexa-skills">Alexa Skills</option>
        <option value="search-alias=grocery">Alimentación y bebidas</option>
        <option value="search-alias=pantry">Amazon Pantry</option>
        <option value="search-alias=warehouse-deals">Amazon Warehouse</option>
        <option value="search-alias=mobile-apps">Appstore para Android</option>
        <option value="search-alias=baby">Bebé</option>
        <option value="search-alias=beauty">Belleza</option>
        <option value="search-alias=diy">Bricolaje y herramientas</option>
        <option value="search-alias=gift-cards">Cheques regalo</option>
        <option value="search-alias=vehicles">Coche - renting</option>
        <option value="search-alias=automotive">Coche y Moto - Piezas y accesorios</option>
        <option value="search-alias=sporting">Deportes y aire libre</option>
        <option selected value="search-alias=amazon-devices">Dispositivos de Amazon</option>
        <option value="search-alias=electronics">Electrónica</option>
        <option value="search-alias=luggage">Equipaje</option>
        <option value="search-alias=appliances">Grandes electrodomésticos</option>
        <option value="search-alias=handmade">Handmade</option>
        <option value="search-alias=kitchen">Hogar y cocina</option>
        <option value="search-alias=lighting">Iluminación</option>
        <option value="search-alias=industrial">Industria y ciencia</option>
        <option value="search-alias=computers">Informática</option>
        <option value="search-alias=mi">Instrumentos musicales</option>
        <option value="search-alias=lawngarden">Jardín</option>
        <option value="search-alias=jewelry">Joyería</option>
        <option value="search-alias=toys">Juguetes y juegos</option>
        <option value="search-alias=stripbooks">Libros</option>
        <option value="search-alias=under-ten-dollars">Menos de 10€</option>
        <option value="search-alias=fashion">Moda</option>
        <option value="search-alias=digital-music">Música Digital</option>
        <option value="search-alias=popular">Música: CDs y vinilos</option>
        <option value="search-alias=office-products">Oficina y papelería</option>
        <option value="search-alias=dvd">Películas y TV</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=pets">Productos para mascotas</option>
        <option value="search-alias=watches">Relojes</option>
        <option value="search-alias=apparel">Ropa y accesorios</option>
        <option value="search-alias=hpc">Salud y cuidado personal</option>
        <option value="search-alias=software">Software</option>
        <option value="search-alias=digital-text">Tienda Kindle</option>
        <option value="search-alias=videogames">Videojuegos</option>
        <option value="search-alias=shoes">Zapatos y complementos</option>
    </select>
  </div>
      </div>
    </div>
    <div className="nav-right">
      <div className="nav-search-submit nav-sprite">
        <span id="nav-search-submit-text" className="nav-search-submit-text nav-sprite">
          Ir
        </span>
        <input type="submit" className="nav-input" value="Ir"/>
      </div>
    </div>
    <div className="nav-fill">
      <div className="nav-search-field ">
        <label id="nav-search-label" htmlFor="twotabsearchtextbox" className="aok-offscreen">
          Buscar
        </label>
        <input
          type="text"
          id="twotabsearchtextbox"
          value=""
          name="field-keywords"
          autoComplete="off"
          placeholder=""
          className="nav-input"
          dir="auto"
        />
      </div>
      <div id="nav-iss-attach"></div>
    </div>
  </form>
</div>

      </div>
    </div>

  );
}

export default Header_1;
