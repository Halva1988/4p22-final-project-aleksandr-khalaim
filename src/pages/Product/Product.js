import '../../components/style/base.scss'
import './Product.scss'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/counter/counterSlice';
import { addToBasket, removeFromBasket } from '../../store/basket/basketSlice';



function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const productsIn = useSelector((state) => state.basket);
    

    const onByClick = () => {
        dispatch(addToBasket(productId));
        dispatch(increment());
    }

    const onDeleteClick = () => {
        dispatch(decrement());
        dispatch(removeFromBasket(productId));
    }

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const result = await response.json();
            setProduct(result)
            setImages(result.images)
        })();
    }, [])


    return (
        <>
            {product.images && <div className="wrapper-product">
                <div className='product-border'>
                    <img className="product-foto" src={images[0]} alt="img" />
                    <div className="wrapper-description">
                        <h1 className="product-title">{product.title}</h1>
                        <h3 className="product-brand"><span>Брэнд: </span>{product.brand}</h3>
                        <p className="product-description">{product.description}</p>
                        <h2 className="product-price">{product.price} $</h2>
                        <div className='btn-wrapper'>
                            {!productsIn[productId] && <button onClick={onByClick} className='btn-buy'>Купить: {`${product.price}`} $</button>}
                            {productsIn[productId] && (
                                <>
                                    <button onClick={onByClick} className='btn-plus btn'>+</button>
                                    <h1>{productsIn[productId]}</h1>
                                    <button onClick={onDeleteClick} className='btn-delete btn'>-</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>}
            {!product.images && <div className='wrapper-border'><h1 className='loading-image'>Идёт загрузка...</h1></div>}
        </>
    )
}

export default ProductPage;