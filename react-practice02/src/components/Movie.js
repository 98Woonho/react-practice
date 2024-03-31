import '../css/Movie.css';

function Movie(props){
    return(
        <div id='movie'>
            <div id='title'>
                {props.title}
            </div>
            <img src={props.posters}/>
        </div>
    )
}

export default Movie;