import axios from 'axios';
import React from 'react';
import Cards from './Cards/Cards';

function DataFilms() {
    const [films, setProducts] = React.useState([]);


    React.useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://flixster.p.rapidapi.com/movies/get-popularity',
            params: { zipCode: '90002', radius: '50' },
            headers: {
                'X-RapidAPI-Key': 'edce1c7d00msh8a8c0b21742b59ap16e40djsn49ab80f12563',
                'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setProducts(response.data.data.popularity);
            console.log(response.data.data.popularity);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <div className="wrapper">
            {
                films.map((item, index) => {
                    if (item.name === '' || item.posterImage.url === null) {
                        return
                    } else {
                        return <Cards
                            key={index}
                            image={item.posterImage.url}
                            name={item.name}
                            popularity={item.sortPopularity}
                            ems={item.sortEms}
                        />
                    }
                })
            }
        </div>
    )
};

export default DataFilms;