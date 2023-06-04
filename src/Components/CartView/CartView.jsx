import "./CartView.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
/* import CartItem from "./CartItem"; */
import { db } from "../../services/firebase/firebaseConfig";

const CartView = () => {
    const { cart, removeItem, getTotal } = useContext(CartContext, db);

    return cart.length > 0 ? (
        <div>
            {cart.map((products) => (
                <div className="carrito-producto">
                    <img
                        className="carrito-img"
                        src={products.img}
                        alt={products.nombre}
                    />
                    <span className="carrito-nombre">{products.nombre}</span>
                    <span className="carrito-precio">{products.precio}</span>
                    <span className="carrito-cantidad">
                        Cantidad:{" "}
                        <span className="carrito-cantidad-numero">
                            {products.quantity}
                        </span>
                    </span>
                    <button
                        className="carrito-boton"
                        onClick={() => removeItem(products.id)}
                    >
                        Eliminar producto
                    </button>
                </div>
            ))}
            <div className="carrito-total">
                <h4 className="carrito-total-precio">
                    Precio Total: ${" "}
                    <span className="carrito-total-precio-numero">
                        {getTotal()}
                    </span>
                </h4>
                <Link to="/checkout">
                    <button className="carrito-total-comprar">
                        Confirmar compra
                    </button>
                </Link>
            </div>
        </div>
    ) : (
        <div>
            <div>
                <h1 className="carrito-vacio">
                    No hay elementos en el carrito
                </h1>
                <Link to="/">
                    <button className="seguir-comprando">
                        Seguir comprando
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CartView;
