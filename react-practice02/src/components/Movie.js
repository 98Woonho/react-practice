import '../css/Movie.css';

function Movie(props){
    return(
        <div id='movie'>
            <div id='title'>
                {props.movieNm}
            </div>
            <img src={props.moviePoster}/>
        </div>
    )
}

export default Movie;