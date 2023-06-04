import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdate);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.find((prod) => prod.id === itemId);
    };

    const getTotal = () => {
        let total = 0;
        cart.forEach((element) => {
            total += element.quantity * element.precio;
        });
        return total;
    };

    const getQuantity = () => {
        let quantity = 0;
        cart.forEach((element) => {
            quantity += element.quantity;
        });
        return quantity;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                getTotal,
                getQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
