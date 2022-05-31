import React, { useEffect, useState } from 'react'
import Arrow from './Arrow';
import Dots from './Dots';
import SliderContent from './SliderContent';
import { SliderImage } from './SliderImage'
import './Slider.css'

const len = SliderImage.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [activeIndex])

  return (
    <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} slideImage={SliderImage} />
        <Arrow 
            prevSlide={ () => setActiveIndex(activeIndex < 1 ? len : activeIndex -1) }
            nextSlide={ () => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1) }
        />
        <Dots
            activeIndex={activeIndex}
            sliderImage={SliderImage}
            onclick={ (activeIndex) => setActiveIndex(activeIndex) } />
    </div>
  )
}

export default Slider