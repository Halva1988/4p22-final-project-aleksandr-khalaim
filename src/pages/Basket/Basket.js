import './Basket.scss'

import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { clearBasket } from "../../store/basket/basketSlice";

function Basket() {
    const products = useSelector(state => state.products.entities);
    const basket = useSelector(state => state.basket);

    const dispatch = useDispatch();

    const onClearClick = (event) => {
        event.preventDefault();
        dispatch(clearBasket());
    }
    console.log(Object.values(basket).length);


    return (
        <>
            <div className='wrapper'>
                
                {products
                    .filter((product) => basket[product.id])
                    .map((product, index) => {
                        return <Cards
                            key={index}
                            thumbnail={product.thumbnail}
                            name={product.title}
                            category={product.category}
                            price={product.price}
                            id={product.id}
                        />
                    })
                }
            </div>
            <div className="total-price">
                {Object.values(basket).length > 0 && <h1>Общая сумма: ${Object.values(basket).length > 0 && products
                .reduce((acc, product) => {
                    if (basket[product.id]) {
                        acc += product.price * basket[product.id];
                    }
                    return acc;
                }, 0)}</h1>}
                
                 {Object.values(basket).length > 0 && <button onClick={onClearClick} className="clear-btn">Очистить корзину</button>} 
                 {Object.values(basket).length === 0 && <h1 className='basket-empty'>Корзина пуста</h1>} 
            </div>
        </>
    )
}

export default Basket;