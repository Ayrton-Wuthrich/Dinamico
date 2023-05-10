import "./App.css";
import NavBar from "./Components/NavBar/index";
import ItemListContainer from "./Components/ItemListContainer/index";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemCount from "./Components/ItemCount/index";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar></NavBar>
                <ItemListContainer
                    greeting={
                        "Bienvenidas/os a la tienda de ropa deportiva para mujeres"
                    }
                />
            </header>
            <ItemDetailContainer />
            <ItemCount />
        </div>
    );
}

export default App;
