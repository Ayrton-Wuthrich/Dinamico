import topNegro from "./catalogo/top-negro.jpg";
import calzasNegras from "./catalogo/calzas-negras.jpg";
import joggersRosa from "./catalogo/joggers-rosa.png";

const products = [
    {
        id: "1",
        nombre: "Top negro deportivo",
        precio: 1000,
        categoria: "Tops",
        img: topNegro,
        stock: 12,
        descripcion: "Descripcion del top negro",
    },
    {
        id: "2",
        nombre: "Calza",
        precio: 1200,
        categoria: "Calzas",
        img: calzasNegras,
        stock: 4,
        descripcion: "Descripcion de la calza negra",
    },
    {
        id: "3",
        nombre: "Jogger rosa",
        precio: 1900,
        categoria: "Joggers",
        img: joggersRosa,
        stock: 7,
        descripcion: "Descripcion del jogger rosa",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
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
            resolve(products.find((prod) => prod.id === productId));
        }, 500);
    });
};
