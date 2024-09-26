import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <h3>Welcome to the Developer Matchmaking App</h3>
            </div>
            <div>
                <h3>Find your perfect match!</h3>
            </div>
        </Slider>
    );
};

export default Carousel;
