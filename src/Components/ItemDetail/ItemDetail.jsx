import "./itemDetail.css";
import ItemCount from "../ItemCount/index";

const ItemDetail = ({
    id,
    nombre,
    img,
    categoria,
    descripcion,
    precio,
    stock,
}) => {
    return (
        <article className="CardItemID">
            <header className="HeaderID">
                <h2 className="ItemHeaderID">{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImgID" />
            </picture>
            <section>
                <p className="InfoID">Categoria: {categoria}</p>
                <p className="InfoID">Descripcion: {descripcion}</p>
                <p className="InfoID">Precio: ${precio}</p>
            </section>
            <footer className="ItemFooterID">
                <ItemCount
                    initial={1}
                    stock={stock}
                    onAdd={(quantity) =>
                        console.log("Cantidad agregada ", quantity)
                    }
                />
            </footer>
        </article>
    );
};

export default ItemDetail;
