import "./itemDetail.css";
import ItemCount from "../ItemCount/index";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetail = () => {
    const { id } = useParams();

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const [descripcion, setDescripcion] = useState("");

    const [stock, setStock] = useState("");

    const [precio, setPrecio] = useState("");

    const [nombre, setNombre] = useState("");

    const [categoria, setCategoria] = useState("");

    const [img, setImg] = useState("");

    const fetchProductData = async (id) => {
        const product = await getDoc(doc(db, "products", id));
        if (product.exists()) {
            setDescripcion(product.data().descripcion);
            setStock(product.data().stock);
            setPrecio(product.data().precio);
            setNombre(product.data().nombre);
            setCategoria(product.data().categoria);
            setImg(product.data().img);
        } else {
            console.log("El producto no existe");
        }
    };

    useEffect(() => {
        fetchProductData(id);
    }, []);
    console.log(id);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            nombre,
            precio,
            img,
        };

        addItem(item, quantity);
    };
    return (
        <article className="CardItemID">
            <header className="HeaderID">
                <h2 className="ItemHeaderID">{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImgID" />
            </picture>
            <section>
                <p className="InfoID">Categoria: {categoria}</p>
                <p className="InfoID">Descripcion: {descripcion}</p>
                <p className="InfoID">Precio: ${precio}</p>
            </section>
            <footer className="ItemFooterID">
                {quantityAdded > 0 ? (
                    <Link to="/cart" className="Opcion botonComprar">
                        Terminar compra
                    </Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;
