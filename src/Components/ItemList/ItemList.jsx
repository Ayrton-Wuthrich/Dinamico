import "../../App.css";
import Item from "../Item/index";

const ItemList = ({ products }) => {
    return (
        <div className="ListGroup">
            {products.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;
