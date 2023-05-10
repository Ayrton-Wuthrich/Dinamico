import CartWidget from "../CartWidget";
import "../../App.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to="/">
                <h2 className="titulo-dinamico">Dinamico</h2>
            </Link>
            <div className="productos-nav-bar">
                <h3>Productos</h3>
                <NavLink
                    to={`/categoria/Top deportivos`}
                    className="buttonCat"
                    {...({ isActive }) =>
                        isActive ? "ActiveOpcion" : "Opcion"}
                >
                    Top deportivos
                </NavLink>
                <NavLink
                    to={`/categoria/Joggers`}
                    className="buttonCat"
                    {...({ isActive }) =>
                        isActive ? "ActiveOpcion" : "Opcion"}
                >
                    Joggers
                </NavLink>
                <NavLink
                    to={`/categoria/Calzas`}
                    className="buttonCat"
                    {...({ isActive }) =>
                        isActive ? "ActiveOpcion" : "Opcion"}
                >
                    Calzas
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};
export default NavBar;
