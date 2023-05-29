import { useState, useEffect } from "react";
import { getProducts, getProductsByCategoria } from "../../asyncMock";
import ItemList from "../ItemList/index";
import "../../App.css";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const asyncFunc = categoriaId ? getProductsByCategoria : getProducts;

        asyncFunc(categoriaId)
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [categoriaId]);

    return (
        <div className="itemListCard">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
