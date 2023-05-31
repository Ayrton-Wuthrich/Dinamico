// import "./Cart.css";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// // import CartItem from "../CartItem/CartItem";
// import { Link } from "react-router-dom";
// import Item from "../Item";

// const Cart = () => {
//     const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

//     if (totalQuantity === 0) {
//         return (
//             <div>
//                 <h1>No hay items en el carrito</h1>
//                 <Link to="/" className="Opcion">
//                     Productos
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div>
//             {cart.map((p) => (
//                 <Item key={p.id} {...p} />
//             ))}
//             <h3>Total: ${total}</h3>
//             <button onClick={() => clearCart()} className="Button">
//                 Limpiar carrito
//             </button>
//             <Link to="/checkout" className="Opcion">
//                 CheckOut
//             </Link>
//         </div>
//     );
// };

// export default Cart;
