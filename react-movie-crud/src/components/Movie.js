import {Component} from 'react';
import '../css/Movie.css';

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    render() {
        return(
            <div id="movie">
                <div id='movie-img'>
                    <img src={this.props.cover_img} alt="영화 이미지"/>
                </div>
                <div id='movie-desc'>
                    <div>제목:{this.props.title}</div>
                    <div>러닝타임:{this.props.running}</div>
                    <div>평점:{this.props.ration}</div>
                </div>
            </div>
        )
    }
}

export default Movie;