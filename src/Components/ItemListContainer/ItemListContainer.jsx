import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategoria } from "../../asyncMock";
import ItemList from "../ItemList/index";
import "../../App.css";

import { useParams } from "react-router-dom";

// import { getDocs, collection, query, where } from "firebase/analytics";
// import { db } from "../../services/firebase/firebaseConfig";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const { categoriaId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoriaId
            ? query(
                  collection(db, "products"),
                  where("categoria", "==", categoriaId)
              )
            : collection(db, "products");

        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
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
