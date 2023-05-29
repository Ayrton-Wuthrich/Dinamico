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
                    to={`/categoria/tops`}
                    className="buttonCat"
                    {...({ isActive }) =>
                        isActive ? "ActiveOpcion" : "Opcion"}
                >
                    Top deportivos
                </NavLink>
                <NavLink
                    to={`/categoria/joggers`}
                    className="buttonCat"
                    {...({ isActive }) =>
                        isActive ? "ActiveOpcion" : "Opcion"}
                >
                    Joggers
                </NavLink>
                <NavLink
                    to={`/categoria/calzas`}
                    className="buttonCat"
                    {...({ isActive }) =>
                        isActive ? "ActiveOpcion" : "Opcion"}
                >
                    Calzas
                </NavLink>
                <CartWidget />
            </div>
        </nav>
    );
};
export default NavBar;
