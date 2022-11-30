import './SearchProduct.scss'
import React from 'react';
import Cards from '../../components/Cards/Cards';

function DataProducts() {
    const [products, setProducts] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [chooseCategory, setChooseCategory] = React.useState('');
    const [category, setCategory] = React.useState([]);


    React.useEffect(() => {
        (async () => {
            const response = await fetch(`https://dummyjson.com/products`);
            const result = await response.json();
            const allCategory = Array.from(new Set(result.products.map((item) => item.category)))
            allCategory.unshift('all');
            setCategory(allCategory);
            setProducts(result.products);

        })();

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
                <select onChange={onChangeCategory} name="filtrCategory" className="filterCategory">
                    {category.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Поиск" />
            </div>
            <div className="wrapper">
                {
                    products.filter((obj) => {
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
            </div>
        </>
    )
};

export default DataProducts;