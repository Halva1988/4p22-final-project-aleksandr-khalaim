import '../../components/style/base.scss'
import './Product.scss'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const result = await response.json();
            setProduct(result)
            setImages(result.images)
        })();
    }, [])


    return (
        <div className="wrapper-product">
            <div className='product-border'>
                <img className="product-foto" src={images[0]} alt="img" />
                <div className="wrapper-description">
                    <h1 className="product-title">{product.title}</h1>
                    <h3 className="product-brand"><span>Брэнд: </span>{product.brand}</h3>
                    <p className="product-description">{product.description}</p>
                    <button className='btn-buy'>Купить: {`${product.price}`} $</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;