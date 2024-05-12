import './index.css'
import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ bg }) => (
    <div className={`${bg} flex flex-col justify-center items-center h-[35vh] md:h-[55vh] lg:h-[70vh] w-full p-2 text-center`}>
        <span className='text-white text-2xl sm:text-xl md:text-4xl lg:text-6xl font-semibold'> Welcome to Sell & Buy Mart, where treasures await! </span>
        <span className='text-white text-md sm:text-lg md:text-3xl lg:text-3xl mt-8'>Whether you’re hunting for gadgets, vintage finds, or sports gear, our platform connects you with fellow enthusiasts. Happy exploring!</span>
    </div >
);

const SliderComponent = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        adaptiveHeight: true
    };

    return (
        <div className='rounded-md overflow-hidden  h-full w-full bg-red-500'>
            <Slider {...settings} >
                <Slide className='h-full w-full' bg={'gr1'} />
                <Slide className='h-full w-full' bg={'gr2'} />
                <Slide className='h-full w-full' bg={'gr3'} />
                <Slide className='h-full w-full' bg={'gr4'} />
            </Slider>
        </div>

    );
};

export default SliderComponent;
