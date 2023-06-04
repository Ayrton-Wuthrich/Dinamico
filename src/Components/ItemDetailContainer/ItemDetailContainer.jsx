import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../App.css";

import { useParams } from "react-router-dom";

// import { getDoc, doc } from "firebase/analytics";
// import { db } from "../../services/firebase/firebaseConfig";

import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, "products", id);

        getDoc(docRef)
            .then((response) => {
                const data = response.data();
                const productsAdapted = { id: response.id, ...data };
                setProduct(productsAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
