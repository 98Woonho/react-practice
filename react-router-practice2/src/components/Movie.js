import '../css/Movie.css';

function Movie(props){
    return(
        <div id='movie'>
            <div id='title'>
                {props.title}
            </div>
            <img src={props.cover_image}/>
        </div>
    )
}

export default Movie;