// calzas
import calzaLargaNegra from "./catalogo/calza-larga-negra.jpg";
import calzaBikerFlores from "./catalogo/calza-biker-flores.webp";
import calzaBikerNegra from "./catalogo/calza-biker-negra.jpg";
import calzaLargaGrisRoja from "./catalogo/calza-larga-gris-roja.jpg";
import calzaLargaTurquesa from "./catalogo/calza-larga-turquesa.jpg";
import calzaPescadoraNegra from "./catalogo/calza-pescadora-negra.jpg";
import calzaPescadoraRosa from "./catalogo/calza-pescadora-rosa.jpg";
//tops
import topNegro from "./catalogo/top-negro.jpg";
import topIpanemaAzul from "./catalogo/top-ipanema-azul.jpg";
import topPrint from "./catalogo/top-print.jpeg";
import topVerde from "./catalogo/top-verde.png";
import topRosa from "./catalogo/top-rosa.jpg";
import topDiesel from "./catalogo/top-diesel.jpeg";
import topMarron from "./catalogo/top-marron.jpg";
//joggers
import joggerRosa from "./catalogo/jogger-rosa.png";
import joggerMostaza from "./catalogo/jogger-mostaza.png";
import joggerMarron from "./catalogo/jogger-marron.png";
import joggerAzul from "./catalogo/jogger-azul.png";
import joggerNegro from "./catalogo/jogger-negro.png";
import joggerGris from "./catalogo/jogger-gris.png";

const products = [
    {
        id: "1",
        nombre: "Top negro",
        precio: 1000,
        categoria: "tops",
        img: topNegro,
        stock: 12,
        descripcion: "Descripcion del top color negro",
    },
    {
        id: "2",
        nombre: "Calza larga negra",
        precio: 1200,
        categoria: "calzas",
        img: calzaLargaNegra,
        stock: 4,
        descripcion: "Descripcion de la calza color negro",
    },
    {
        id: "3",
        nombre: "Jogger rosa",
        precio: 1900,
        categoria: "joggers",
        img: joggerRosa,
        stock: 7,
        descripcion: "Descripcion del jogger color rosa",
    },
    {
        id: "4",
        nombre: "Calza biker con flores",
        precio: 1400,
        categoria: "calzas",
        img: calzaBikerFlores,
        stock: 2,
        descripcion: "Descripcion de la calza biker con flores",
    },
    {
        id: "5",
        nombre: "Top Ipanema azul",
        precio: 1000,
        categoria: "tops",
        img: topIpanemaAzul,
        stock: 4,
        descripcion: "Descripcion del top ipanema color azul",
    },
    {
        id: "6",
        nombre: "Jogger mostaza",
        precio: 1900,
        categoria: "joggers",
        img: joggerMostaza,
        stock: 6,
        descripcion: "Descripcion del jogger color mostaza",
    },
    {
        id: "7",
        nombre: "Calza biker negra",
        precio: 1400,
        categoria: "calzas",
        img: calzaBikerNegra,
        stock: 7,
        descripcion: "Descripcion de la calza biker color negra",
    },
    {
        id: "8",
        nombre: "Top Print",
        precio: 1000,
        categoria: "tops",
        img: topPrint,
        stock: 1,
        descripcion: "Descripcion del top print",
    },
    {
        id: "9",
        nombre: "Jogger marron",
        precio: 1900,
        categoria: "joggers",
        img: joggerMarron,
        stock: 0,
        descripcion: "Descripcion del jogger color marron",
    },
    {
        id: "10",
        nombre: "Calza larga gris con rojo",
        precio: 1200,
        categoria: "calzas",
        img: calzaLargaGrisRoja,
        stock: 9,
        descripcion: "Descripcion de la calza larga color gris con rojo",
    },
    {
        id: "11",
        nombre: "Top verde",
        precio: 1000,
        categoria: "tops",
        img: topVerde,
        stock: 1,
        descripcion: "Descripcion del top color verde",
    },
    {
        id: "12",
        nombre: "Jogger Azul",
        precio: 1900,
        categoria: "joggers",
        img: joggerAzul,
        stock: 5,
        descripcion: "Descripcion del jogger color azul",
    },
    {
        id: "13",
        nombre: "Calza larga turquesa",
        precio: 1200,
        categoria: "calzas",
        img: calzaLargaTurquesa,
        stock: 2,
        descripcion: "Descripcion de la calza larga color turquesa",
    },
    {
        id: "14",
        nombre: "Top rosa",
        precio: 1000,
        categoria: "tops",
        img: topRosa,
        stock: 4,
        descripcion: "Descripcion del top color rosa",
    },
    {
        id: "15",
        nombre: "Jogger negro",
        precio: 1900,
        categoria: "joggers",
        img: joggerNegro,
        stock: 3,
        descripcion: "Descripcion del jogger color negro",
    },
    {
        id: "16",
        nombre: "Calza pescadora negra",
        precio: 1300,
        categoria: "calzas",
        img: calzaPescadoraNegra,
        stock: 5,
        descripcion: "Descripcion de la calza pescadora color negra",
    },
    {
        id: "17",
        nombre: "Top Diesel",
        precio: 1000,
        categoria: "tops",
        img: topDiesel,
        stock: 2,
        descripcion: "Descripcion del top diesel",
    },
    {
        id: "18",
        nombre: "Jogger gris",
        precio: 1900,
        categoria: "joggers",
        img: joggerGris,
        stock: 2,
        descripcion: "Descripcion del jogger color gris",
    },
    {
        id: "19",
        nombre: "Calza pescadora rosa",
        precio: 1300,
        categoria: "calzas",
        img: calzaPescadoraRosa,
        stock: 7,
        descripcion: "Descripcion de la calza pescadora color rosa",
    },
    {
        id: "20",
        nombre: "Top marron",
        precio: 1000,
        categoria: "tops",
        img: topMarron,
        stock: 6,
        descripcion: "Descripcion del top color marron",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategoria = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.categoria === productId));
        }, 750);
    });
};
