import React from 'react'
import Star from '../assets/images/star_16px.png'

function SliderContent( {activeIndex, slideImage} ) {
  return (
    <section>
        {slideImage.map((slide,index) => (
            <div
                key = {index}
                className = {index === activeIndex ? 'slides active' : 'inactive'}>
                    <img className='slide-image' src={slide.urls} alt="" />
                    <div className='content'>
                        <h3 className='slide-title'>{slide.title}</h3>

                        <div className='overview'>
                            <h4 className='title'>Overview : </h4>
                            <p className='slide-text'>{slide.description}</p>
                        </div>
                        
                        <div className='date'>
                            <h4 className='title'>Date : </h4>
                            <p className='slide-date'>{slide.date}</p>
                        </div>

                        <div className='rate'>
                            <h4 className='title'>Rating : </h4>
                            <p className='slide-rate'>{slide.rating} <img src={Star} alt='star'/> </p> 
                        </div>

                        <div className='categories'>
                            <h4 className='title'>Categories : </h4>
                            <p className='slide-categories'>{slide.categories}</p> 
                        </div>
                    </div>
                </div>
        ))}
    </section>
    )
}

export default SliderContent