import React from 'react';
import Card from './card';
import LoadingHoc from './hoc'

function MovieList(props) {
    const movieList = props.movies.map((el , key)=><Card movie={el} key={el.key} ></Card> )
    return (
        <div className="Movie-List">
            {movieList}
        </div>
    )
    
}
export default LoadingHoc(MovieList);
