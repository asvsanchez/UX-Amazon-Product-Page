import React from "react";
import zoomin from '../images/zoomin.png';
import zoomout from '../images/zoomout.png';

const Social: React.FC = () => {

  var fontSize = 1;

  function zoomIn() {
    fontSize += 0.1;
    document.getElementById("ppd").style.fontSize = fontSize + "em";
  }

  function zoomOut() {
      fontSize -= 0.1;
      document.getElementById("ppd").style.fontSize = fontSize + "em";
  }

  return (
    <div
      id="tellAFriendBox_feature_div"
      className="feature"
      data-feature-name="tellAFriendBox"
    >
      {/*
      Thanks to flaticon.com for the icons: 
      https://www.flaticon.com/free-icon/zoom_2489734?term=zoom&page=1&position=4
      https://www.flaticon.com/free-icon/zoom_2489736?term=zoom&page=1&position=5
      */}
      <img onClick={zoomIn} src={zoomin} alt="zoomin" id="zoomin"/> 
      <img onClick={zoomOut} src={zoomout} alt="zoomout" id="zoomout"/>
      <br/>

      <div
        id="tell-a-friend"
        data-close="Cerrar"
        data-dest
        data-title="Compartir producto por Email"
        className="a-section a-text-center a-spacing-small"
      >
        <a
          id="swfMailTo"
          className="a-link-normal email"
          title="Compartir por e-mail"
          href="mailto:?body=Quiero%20recomendar%20este%20producto%20en%20Amazon.com%0A%0AAmazon%20Fire%20TV%20Stick%20con%20mando%20por%20voz%20Alexa%20%7C%20Reproductor%20de%20contenido%20multimedia%20en%20streaming%0Apor%20Amazon.es%0AM%C3%A1s%20informaci%C3%B3n%3A%20https%3A%2F%2Fwww.amazon.es%2Fdp%2FB07PVCVBN7%2Fref%3Dcm_sw_em_r_mt_dp_U_tb1gEbE15FZMM&subject=Quiero%20recomendar%20este%20producto%20en%20Amazon"
        >
          Compartir
        </a>
        <span className="a-letter-space"></span>
        <a
          id="swfImageMailTo"
          className="a-link-normal email"
          title="Compartir por e-mail"
          href="mailto:?body=Quiero%20recomendar%20este%20producto%20en%20Amazon.com%0A%0AAmazon%20Fire%20TV%20Stick%20con%20mando%20por%20voz%20Alexa%20%7C%20Reproductor%20de%20contenido%20multimedia%20en%20streaming%0Apor%20Amazon.es%0AM%C3%A1s%20informaci%C3%B3n%3A%20https%3A%2F%2Fwww.amazon.es%2Fdp%2FB07PVCVBN7%2Fref%3Dcm_sw_em_r_mt_dp_U_tb1gEbE15FZMM&subject=Quiero%20recomendar%20este%20producto%20en%20Amazon"
        >
          <i className="a-icon a-icon-share-email" role="img"></i>
        </a>
        <span className="a-letter-space"></span>
        <a
          id="facebook"
          data-height="400"
          className="a-link-normal swf-social-site"
          target="_blank"
          rel="noopener"
          title="Facebook"
          href="/gp/redirect.html/ref=cm_sw_cl_fa_dp_U_tb1gEbE15FZMM?_encoding=UTF8&amp;location=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fshare%3F_encoding%3DUTF8%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.amazon.es%252Fdp%252FB07PVCVBN7%252Fref%253Dcm_sw_r_fa_dp_U_tb1gEbE15FZMM%26redirect_uri%3Dhttps%253A%252F%252Fwww.amazon.es%252Fgp%252Fpdp%252Ftaf%252Ffb_post_redirect.html%252Fref%253Dcm_sw_s_fa_dp_U_tb1gEbE15FZMM%26app_id%3D465632727431967%26hashtag%3D%2523Amazon&amp;token=DCEB36ACAF86C1E600BE5659103EB6F548A37B81"
        >
          <i
            className="a-icon a-icon-share-facebook"
            role="img"
            aria-label="Facebook"
          ></i>
        </a>
        <span className="a-letter-space"></span>
        <a
          id="twitter"
          data-height="400"
          className="a-link-normal swf-social-site"
          target="_blank"
          rel="noopener"
          title="Twitter"
          href="/gp/redirect.html/ref=cm_sw_cl_tw_dp_U_tb1gEbE15FZMM?_encoding=UTF8&amp;location=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Foriginal_referer%3Dhttps%25253A%25252F%25252Fwww.amazon.es%25252Fgp%25252Fproduct%25252FB07PVCVBN7%25252Fref%25253Dcm_sw_r_tw_dp_U_x_tb1gEbE15FZMM%26text%3DAmazon%2520Fire%2520TV%2520Stick%2520con%2520mando%2520por%2520voz%2520Alexa%2520%257C%2520Reproductor%2520de%2520contenido%2520multi...%26related%3Damazondeals%252Camazonmp3%26url%3Dhttps%253A%252F%252Fwww.amazon.es%252Fdp%252FB07PVCVBN7%252Fref%253Dcm_sw_r_tw_dp_U_x_tb1gEbE15FZMM%26via%3Damazon&amp;token=FB93A0998D9BE1554275967DF00CDF9B2A53A095"
        >
          <i
            className="a-icon a-icon-share-twitter"
            role="img"
            aria-label="Twitter"
          ></i>
        </a>
        <span className="a-letter-space"></span>
        <a
          id="pinterest"
          data-height="570"
          className="a-link-normal swf-social-site"
          target="_blank"
          rel="noopener"
          title="Pinterest"
          href="/gp/redirect.html/ref=cm_sw_cl_pi_dp_U_tb1gEbE15FZMM?_encoding=UTF8&amp;location=https%3A%2F%2Fpinterest.com%2Fpin%2Fcreate%2Fbutton%3Furl%3Dhttps%253A%252F%252Fwww.amazon.es%252Fdp%252FB07PVCVBN7%252Fref%253Dcm_sw_r_pi_dp_U_x_tb1gEbE15FZMM%26title%3DAmazon%2520Fire%2520TV%2520Stick%2520con%2520mando%2520por%2520voz%2520Alexa%2520%257C%2520Reproducto...%26description%3DAmazon%2520Fire%2520TV%2520Stick%2520con%2520mando%2520por%2520voz%2520Alexa%2520%257C%2520Reproducto...%2520https%253A%252F%252Fwww.amazon.es%252Fdp%252FB07PVCVBN7%252Fref%253Dcm_sw_r_pi_dp_U_x_tb1gEbE15FZMM%26media%3Dhttps%253A%252F%252Fimages-na.ssl-images-amazon.com%252Fimages%252FI%252F31uYRbHGk3L.jpg&amp;token=0B8954F802183862886844E065E311FA90C7920C"
        >
          <i
            className="a-icon a-icon-share-pinterest"
            role="img"
            aria-label="Pinterest"
          ></i>
        </a>
        <span className="a-letter-space"></span>
      </div>
    </div>
  );
};

export default Social;
