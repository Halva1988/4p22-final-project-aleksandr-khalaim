import './SearchProduct.scss'
import React from 'react';
import Cards from '../../components/Cards/Cards';

function DataProducts() {
    const [products, setProducts] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        (async () => {
            const response = await fetch(`https://dummyjson.com/products`);
            const result = await response.json();
            setProducts(result.products);
        })();

    }, []);
    
    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
      };

    return (
        <>
            <div className="search">
                <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Поиск" />
            </div>
            <div className="wrapper">
                {
                    products.filter((obj) => {
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
                            popularity={item.rating}
                            id={item.id}
                        />
                    })
                }
            </div>
        </>
    )
};

export default DataProducts;