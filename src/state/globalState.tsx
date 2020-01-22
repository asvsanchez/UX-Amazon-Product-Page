interface IGlobalState {
    name_style: String;
    price: string;
    description_element: string[];
    option_element: string[];
    title: string;
    wish: string;
    ratings_review: string[];
    images_link: string[];
    hour_before: string;
    seller: string;
}

export default IGlobalState;

export const initialState: IGlobalState = {
    name_style: "Fire TV Stick",
    price: "39,99 €",
    description_element: ["Nuestro Fire TV Stick más vendido, ahora incluye el mando por voz Alexa. Controla tu TV, barra de sonido y receptor compatibles con los botones específicos para encender el dispositivo, silenciarlo y ajustar el volumen.",
    "Reproduce y controla contenido con el nuevo mando por voz Alexa. Disfruta de tus contenidos favoritos de Prime Video, Netflix, YouTube, DAZN, Atresplayer, RTVE A la carta, Movistar+  y otros servicios (es posible que se requieran suscripciones separadas).",
    "Los dispositivos Amazon Fire TV Stick tienen más espacio de almacenamiento para apps y juegos que ningún otro reproductor de contenido multimedia en streaming.",
    "Explora y descubre miles apps y Skills de Alexa, además de millones de sitios web, como Facebook y Reddit.",
    "El Fire TV Stick con Alexa ofrece el mayor número de funciones de voz en reproductores en streaming: puedes ver el vídeo en directo de cámaras compatibles, consultar la información del tiempo, atenuar las luces y reproducir música en streaming.",
    "Los miembros Amazon Prime tienen acceso ilimitado a miles de películas y episodios de series de televisión, así como a más de dos millones de canciones sin anuncios con Prime Music.",
    "¿No tienes satélite? No hay problema. Disfruta de la televisión, las noticias y los deportes en directo con DAZN, Atresplayer, RTVE A la carta, Movistar+  y muchos más servicios (pueden aplicarse cargos adicionales)."],
    option_element: ["Amazon Ethernet Adaptador - Disfruta de la velocidad y la fiabilidad de la conexión a Internet por cable", "EUR 14,99",
    "Cable USB de Corriente para el Amazon Fire TV", "EUR 20,99"],
    title: "Amazon Fire TV Stick con mando por voz Alexa | Reproductor de contenido multimedia en streaming",
    wish: "Enviar a Alejandro - Los Pala... 41720;",
    ratings_review: ["4.5 de 5 estrellas", "6,628 valoraciones", "Más de 1000 preguntas respondidas", "fire stick"],
    images_link: ["https://images-na.ssl-images-amazon.com/images/I/51xX9%2B33enL._AC_US40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/31uYRbHGk3L._AC_US40_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41q5ws%2BOwNL._AC_US40_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51eab8AoMtL._AC_US40_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif"],
    hour_before: "6 hrs y 46 mins",
    seller: "Amazon EU Sarl"
}