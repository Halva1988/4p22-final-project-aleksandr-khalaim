import './SearchProduct.scss'
import React from 'react';
import Cards from '../../components/Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsSlice';


function DataProducts() {
    const [products, isLoading] = useSelector((state) => [state.products.entities, state.products.isLoading]);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = React.useState('');
    const [chooseCategory, setChooseCategory] = React.useState('');
    const [category, setCategory] = React.useState([]);


    React.useEffect(() => {

        dispatch(getProducts());

        const allCategory = Array.from(new Set(products.map((item) => item.category)));
        allCategory.unshift('all');
        setCategory(allCategory);

    }, []);

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    };

    const onChangeCategory = (event) => {
        setChooseCategory(event.target.value)
    };

    return (
        <>
            <div className="search">
                <select onChange={onChangeCategory} name="filter-category" className="filterCategory">
                    {category.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Поиск" />
            </div>
            <div className="wrapper">
                {
                    !isLoading && products.filter((obj) => {
                        const productCategory = (obj.category);
                        if (chooseCategory === 'all') {
                            return products
                        }

                        return (
                            productCategory.includes(chooseCategory)
                        )
                    }).filter((obj) => {
                        const productTitle = (obj.title).toLowerCase();

                        return (
                            productTitle.includes(searchValue.toLowerCase())
                        )
                    }).map((item, index) => {

                        return <Cards
                            key={index}
                            thumbnail={item.thumbnail}
                            name={item.title}
                            category={item.category}
                            price={item.price}
                            id={item.id}
                        />

                    })
                }
                {
                    isLoading && 
                        <h1>Подождите, идёт загрузка.... </h1>
                }
            </div>
        </>
    );
};

export default DataProducts;