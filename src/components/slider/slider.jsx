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

const Slide = ({ bg }) => (
    <div className={`slideCont mx-auto h-[70vh] w-full ${bg}`}>
        {/* <img src={src} alt={alt} className='h-full w-full' /> */}
    </div>
);

const SliderComponent = () => {

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
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        adaptiveHeight: true
    };

    return (
        <div className='rounded-md overflow-hidden  h-full w-full'>
            <div className=" rounded-xl slider-container h-full w-full">
                <Slider {...settings} >
                    <Slide className='h-full w-full' bg={'bg-indigo-400'} />
                    <Slide className='h-full w-full' bg={'bg-red-400'} />
                    <Slide className='h-full w-full' bg={'bg-orange-400'} />
                    <Slide className='h-full w-full' bg={'bg-green-400'} />
                </Slider>
            </div>
        </div>

    );
};

export default SliderComponent;
