import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function MovieInfo() {
    const navigate = useNavigate();
    const { imdbID } = useParams();
    const [movieInfo, setMovieInfo ] = useState([]);
    const [loading, setLoading] = useState();
    
    async function fetchMovieInfo() {
        setLoading(true);
        const { data } = await axios.get(
            `https://www.omdbapi.com/?i=${imdbID}&apikey=5a7bc394`
        );
        setMovieInfo(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchMovieInfo();
    }, [imdbID]);

    return (
        <>
            {loading ? (
                <>
                <div id='movieInfo'>
                    <div className='container'>
                        <button className='back__btn btn' onClick={() => navigate(-1)}>Back</button>
                        <div className='info__wrapper'>
                            <div className='info'>
                                <div className='movie__img'>
                                    <figure className='movie__img-poster--skeleton'>
                                        <img src={`${movieInfo.Poster}`} alt='' className='movie__poster' />
                                    </figure>
                                </div>
                                <div className='movie__info'>
                                    <div className='movie__info--skeleton'></div>
                                    <div className='movie__info--skeleton'></div>
                                    <div className='movie__info--skeleton'></div>
                                    <div className='movie__info--skeleton'></div>
                                    <div className='movie__info--skeleton'></div>
                                    <div className='movie__info--skeleton'></div>
                                    <div className='movie__info--skeleton'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <div id='movieInfo'>
                <div className='container'>
                    <button className='back__btn btn' onClick={() => navigate(-1)}>Back</button>
                    <div className='info__wrapper'>
                        <div className='info'>
                            <div className='movie__img'>
                                <figure className='movie__img-poster'>
                                    <img src={`${movieInfo.Poster}`} alt='img' className='movie__poster' />
                                </figure>
                            </div>
                            <div className='movie__info'>
                                <h2>{movieInfo.Title}</h2>
                                <h3 className='movie__info--descrip'>
                                    <span className='red'>Rating:</span>
                                    <h4>{movieInfo.imdbRating}</h4>
                                </h3>
                                <h3 className='movie__info--descrip'>
                                    <span className='red'>Starring:</span>
                                    <h4>{movieInfo.Actors}</h4>
                                </h3>
                                <h3 className='movie__info--descrip'>
                                    <span className='red'>Plot:</span>
                                    <h4>{movieInfo.Plot}</h4>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )}
        </>
  );
}

export default MovieInfo