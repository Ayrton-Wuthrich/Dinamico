import "./App.css";
import NavBar from "./Components/NavBar/index";
import ItemListContainer from "./Components/ItemListContainer/index";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <ItemListContainer
                    greeting={
                        "Bienvenidas/os a la tienda de ropa deportiva para mujeres"
                    }
                />
            </header>
        </div>
    );
}

export default App;
