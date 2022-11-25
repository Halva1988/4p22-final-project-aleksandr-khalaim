import '../../components/style/_base.scss'
import './Film.scss'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';



function FilmPage() {
    const { filmId } = useParams();
    const [film, setFilm] = useState({});
    const [genre, setGenre] = useState([]);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://imdb-top-100-movies.p.rapidapi.com/premiummovies/${filmId}`,
            headers: {
                'X-RapidAPI-Key': 'edce1c7d00msh8a8c0b21742b59ap16e40djsn49ab80f12563',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setFilm(response.data)
            setGenre(response.data.genre)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])    

    return (
        <div className="wrapper-film">
            <img className="film-foto" src={film.image} alt="img" />
            <div className="wrapper-description">
                <h1 className="film-title">{film.title}</h1>
                <h3 className="film-year"><span>Год выпуска: </span>{film.year}</h3>
                <p className="film-genre"><span>Жанр: </span>{genre.join(', ')}</p>
                <p className="film-description">{film.description}</p>
                <button className='btn-buy'>Купить: {`${Math.round(film.year / 10)}`} ₽</button>
            </div>
        </div>
    )
}

export default FilmPage;