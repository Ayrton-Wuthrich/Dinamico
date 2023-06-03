import "./itemDetail.css";
import ItemCount from "../ItemCount/index";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

// console.log("db", db);

const ItemDetail = () =>
    // id,
    // nombre,
    // img,
    // categoria,
    // descripcion,
    // precio,
    // stock,
    {
        let { id } = useParams();

        const [quantityAdded, setQuantityAdded] = useState(0);

        const { addItem } = useContext(CartContext);

        const [productData, setProductData] = useState(null);

        useEffect(() => {
            const fetchProductData = async () => {
                try {
                    const productDoc = doc(db, "products", id);
                    const productSnapshot = await getDoc(productDoc);
                    const productData = productSnapshot.data();
                    console.log(
                        "productData1",
                        productData?.nombre,
                        productData
                    );
                    setProductData(productData); // Establecer el estado utilizando setProductData
                } catch (error) {
                    console.error("Error al obtener el documento:", error);
                }
            };

            //     try {
            //         console.log("itemid", itemId);
            //         const productDoc = doc(db, "products", itemId);

            //         console.log("productDOC", productDoc);

            //         const productSnapshot = await getDoc(productDoc);
            //         // console.log("productSnapshot", productSnapshot);
            //         const data = productSnapshot.data();
            //         console.log("data", data);
            //         if (productSnapshot.exists) {
            //             console.log(
            //                 "productSnapshot.exists",
            //                 productSnapshot.exists
            //             );
            //             // console.log("productSnapshot.data()", data);
            //             setProductData((prevProductData) => {
            //                 return { ...prevProductData, ...data };
            //             });
            //         }
            //         // if (productSnapshot.exists()) {
            //         //     setProductData((prevProductData) => {
            //         //         return {
            //         //             ...prevProductData,
            //         //             ...productSnapshot.data(),
            //         //         };
            //         //     });
            //         // }

            //         // if (productSnapshot.exists()) {
            //         //     setProductData(productSnapshot.data());
            //         // }
            //     } catch (error) {
            //         console.error(
            //             "Error fetching product data from Firebase",
            //             error
            //         );
            //     }
            // };

            fetchProductData();
        }, [id]);
        // console.log("productData2", productData);

        // useEffect(() => {
        //     console.log("productData", productData);
        // }, [productData]);

        // const handleOnAdd = (quantity) => {
        //     setQuantityAdded(quantity);

        //     const item = {
        //         id,
        //         nombre,
        //         precio,
        //         img,
        //     };

        //     addItem(item, quantity);
        // };
        return (
            <article className="CardItemID">
                <header className="HeaderID">
                    <h2 className="ItemHeaderID">{productData?.nombre}</h2>
                </header>
                <picture>
                    <img
                        src={productData?.img}
                        alt={productData?.nombre}
                        className="ItemImgID"
                    />
                </picture>
                <section>
                    <p className="InfoID">
                        Categoria: {productData?.categoria}
                    </p>
                    <p className="InfoID">
                        Descripcion: {productData?.descripcion}
                    </p>
                    <p className="InfoID">Precio: ${productData?.precio}</p>
                </section>
                <footer className="ItemFooterID">
                    {quantityAdded > 0 ? (
                        <Link to="/cart" className="Opcion botonComprar">
                            Terminar compra
                        </Link>
                    ) : (
                        <ItemCount
                            initial={1}
                            stock={productData?.stock}
                            onAdd="0"
                        />
                    )}
                </footer>
            </article>
        );
    };

export default ItemDetail;
