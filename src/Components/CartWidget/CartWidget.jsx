import carrito from "./Assets/cart.svg";
import "../../App.css";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart, getQuantity } = useContext(CartContext);

    return cart.length > 0 ? (
        <div>
            <Link
                to="/cart"
                className="CartWidget img-cart-widget"
                // style={{ display: totalQuantity > 0 ? "block" : "none" }}
            >
                <img className="CartImg" src={carrito} alt="CartWidget" />
                <span className="cantidad">{getQuantity()}</span>
                {/* {totalQuantity} */}
            </Link>
        </div>
    ) : (
        <></>

        // <div className="img-cart-widget">
        //
        //     <p>6</p>
        // </div>
    );
};

export default CartWidget;
