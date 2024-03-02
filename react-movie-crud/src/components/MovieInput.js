import {Component} from 'react';
import '../css/MovieInput.css'

class MovieInput extends Component {
    constructor(props) {
        super(props)
        this.state={
            id:'',
            title:'',
            running:'',
            rating:''
        }
    }

    idChange = () => {
        console.log('idChange!')
    }

    titleChange = () => {
        console.log('titleChange!')
    }

    runningChange = () => {
        console.log('runningChange!')
    }

    ratingChange = () => {
        console.log('ratingChange!')
    }

    addMovieInfo = () => {
        alert('추가!(MovieInput)')
        const {id, title, running, rating} = this.state
        this.props.addMovieInfo(id, title, running, rating)
    }

    render() {
        return(
            <div id='movie-input'>
                <input type="text" onChange={this.idChange} />
                <input type="text" onChange={this.titleChange} />
                <input type="text" onChange={this.runningChange} />
                <input type="text" onChange={this.ratingChange} />
                <button onClick={this.addMovieInfo}>추가</button>
            </div>
        )
    }
}

export default MovieInput;