import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

function Movies() {
    const { search } = useParams();
    const [movie, setMovies] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState();
  
    async function fetchMovies() {
        setLoading(true);
        const {data} = await axios.get(
            `https://www.omdbapi.com/?i=tt3896198&apikey=5a7bc394&s=${search}`
        );
        setMovies(data.Search);
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies();
    }, [search]);

   function filterMovies(filter) {
    if (filter === "old_to_new") {
        setMovies(movie.slice().sort((a, b) => a.Year - b.Year));
    }
    if (filter === "new_to_old") {
        setMovies(movie.slice().sort((a, b) => b.Year - a.Year));
    }
   }
  
   function renderMovies() {
    if (movie !== undefined) {
        return loading 
            ? new Array(9).fill(0).map((_, index) => (
                
                    <div className='movie__result' key={index}>
                        <div className='poster__wrapper--skeleton'></div>
                        <div className='movie__title--skeleton'></div>
                    </div>
                
            ))
            : movie.slice(0, 9).map((movie) => (
                    <div className='movie__result' onClick={() => navigate(`${movie.imdbID}`)}>
                        <figure className='poster__wrapper'>
                            <img src={`${movie.Poster}`} className='poster__movie' alt="img"/>
                        </figure> 
                        <div className='movie__title'>{`${movie.Title}`}</div>
                    </div>  
               ));
    }
}         

    return (
    <section id='movies'>
        <div className='container'>
            <div className="movie__filter">
            <h3 className='results__for'>
                Search Results for: {`${search}`}
            </h3>
            <select defaultValue=''
                    name=''
                    id='filter'
                    onChange={(event) => filterMovies(event.target.value)}
            >
                <option value='' disabled selected>Sort</option>
                <option value='new_to_old'>New To Old</option>
                <option value='old_to_new'>Old To New</option>
            </select>
            </div>
        </div>
        <div className='row__movies'>
          <div className='movie__results'>{renderMovies()}</div>
        </div>
    </section>
  );
}

export default Movies;