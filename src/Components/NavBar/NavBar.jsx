import CartWidget from "../CartWidget";
import "../../App.css";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h2 className="titulo-dinamico">Dinamico</h2>
            <div className="productos-nav-bar">
                <h3>Productos</h3>
                <button>Top deportivos</button>
                <button>Remeras</button>
                <button>Calzas</button>
            </div>
            <CartWidget />
        </nav>
    );
};
export default NavBar;
