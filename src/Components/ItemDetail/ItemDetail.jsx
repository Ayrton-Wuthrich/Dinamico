import "./itemDetail.css";
import ItemCount from "../ItemCount/index";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
    id,
    nombre,
    img,
    categoria,
    descripcion,
    precio,
    stock,
}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            nombre,
            precio,
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
