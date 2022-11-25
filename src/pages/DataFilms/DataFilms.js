import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';

function DataFilms() {
    const [films, setProducts] = React.useState([]);


    React.useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://imdb-top-100-movies.p.rapidapi.com/premiummovies',
            headers: {
                'X-RapidAPI-Key': 'edce1c7d00msh8a8c0b21742b59ap16e40djsn49ab80f12563',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setProducts(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <div className="wrapper">
            {
                films.map((item, index) => {
                    return <Cards
                        key={index}
                        image={item.image}
                        name={item.title}
                        popularity={item.rank}
                        imdb={item.rating}
                        id={item.id}
                    />
                })
            }
        </div>
    )
};

export default DataFilms;