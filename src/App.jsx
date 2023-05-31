import "./App.css";
import NavBar from "./Components/NavBar/index";
import ItemListContainer from "./Components/ItemListContainer/index";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartView from "./Components/CartView/CartView";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <h3 className="enviosDomicilio">
                    EL DESPACHO DESDE NUESTRO LOCAL PUEDE DEMORAR HASTA 5 DÍAS
                    HÁBILES. ÚNICA CONDICIÓN DE COMPRA: MÍNIMO $2.000
                </h3>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/categoria/:categoriaId"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/item/:itemId"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<CartView />} />
                        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
