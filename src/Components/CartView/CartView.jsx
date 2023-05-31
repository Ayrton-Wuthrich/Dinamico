import "./CartView.css";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
/* import CartItem from "./CartItem"; */

const CartView = () => {
    const { cart, removeItem, getTotal } = useContext(CartContext);

    return cart.length > 0 ? (
        <div>
            {cart.map((products) => (
                <div>
                    <span>{products.nombre}</span>
                    <span>{products.precio}</span>
                    <img src={products.img} />
                    <span>Cantidad: {products.quantity}</span>
                    <button onClick={() => removeItem(products.id)}>
                        Eliminar producto
                    </button>
                </div>
            ))}
            <div>
                <h4>Precio Total: {getTotal()}</h4>
                <button>Confirmar compra</button>
            </div>
        </div>
    ) : (
        <div>
            <div>
                <h1>No hay elementos en el carrito</h1>
                <Link to="/">
                    <button>Seguir comprando</button>
                </Link>
            </div>
        </div>
    );
};

export default CartView;
