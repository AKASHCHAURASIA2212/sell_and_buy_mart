import './index.css'
import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MyContext } from '../../App';
import car1 from '../../asset/crousal/car1.webp';
import car2 from '../../asset/crousal/car2.webp';
import car3 from '../../asset/crousal/car3.webp';
import car4 from '../../asset/crousal/car4.webp';
import car5 from '../../asset/crousal/car5.webp';
import car6 from '../../asset/crousal/car6.webp';

const Slide = ({ src, alt }) => (
    <div className='slideCont border-2 mx-auto'>
        <img src={src} alt={alt} className='h-full w-full' />
    </div>
);

const SliderComponent = ({ height = '400px', widht = 'auto' }) => {

    const { bannerData, catList, postData } = useContext(MyContext);

    // console.log(bannerData);


    const slides = [
        { src: car1, alt: 'Image 1' },
        { src: car2, alt: 'Image 1' },
        { src: car3, alt: 'Image 1' },
        { src: car4, alt: 'Image 1' },
        { src: car5, alt: 'Image 1' },
        { src: car6, alt: 'Image 1' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        adaptiveHeight: true
    };

    return (
        <div className='mx-2 border-2 border-indigo-500 rounded-md overflow-hidden bg-indigo-800 '>
            <div className=" rounded-xl slider-container">
                <Slider {...settings} >
                    {slides.map((slide, index) => (
                        <Slide key={index} src={slide.src} alt={slide.alt} className='0' />
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default SliderComponent;
