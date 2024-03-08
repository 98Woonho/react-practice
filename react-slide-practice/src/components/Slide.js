import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Slide.css';
import img1 from '../images/slide-image1.jfif';
import img2 from '../images/slide-image2.jfif';
import img3 from '../images/slide-image3.jfif';
import img4 from '../images/slide-image4.jfif';
import img5 from '../images/slide-image5.jfif';
import img6 from '../images/slide-image6.jfif';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Slide() {
    const [movieList, setMovieList]=useState([])
    useEffect(() => {
        getMovies()
    }, [])
    const getMovies = async() => {
        await axios.get(`https://yts.mx/api/v2/list_movies.json`)
        .then(res => {
            console.log(res)
            console.log(res.data.data.movies)
            setMovieList(res.data.data.movies)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const settings={
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true
    }
    const slideMap = movieList.map((data) => (<div className='slide-element'>
    <img src={data.medium_cover_image}/>
</div>))

    return (
        <div id="slide">
            <Slider {...settings}>
                {slideMap}
            </Slider>
        </div>
    )
}

export default Slide;