import cart from "./Assets/cart.svg";
import "../../App.css";

const CartWidget = () => {
    return (
        <div className="img-cart-widget">
            <img src={cart} alt="CartWidget" />0
        </div>
    );
};

export default CartWidget;
