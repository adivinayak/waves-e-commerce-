import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/mybutton';

import classes from '../../Resources/css/styles.module.css'
const HomeSlider = () => {
    
    const slides = [
        
        {
          
            img:'/images/featured/featured_home.jpg',
            lineOne:'Fender',
            lineTwo:'Custom shop',
            linkTitle:'Shop now',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/featured_home_2.jpg',
            lineOne:'B-Stock',
            lineTwo:'Awesome discounts',
            linkTitle:'View offers',
            linkTo:'/shop'
        }

    ]
    
    const settings={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
    
    const generateSlides=()=>(
        slides ? 
        slides.map((item,i)=>(
            <div key={i}>
                <div className={classes.featured_image}
                 style={{
                     background:`url(${item.img})`,
                     height:`${window.innerHeight}px`
                 }}
                >
  <div className={classes.featured_action}>
                               <div className={classes.tag}>
                            <div className={classes.tagtitle}>{item.lineOne}</div>
                            <div className={classes.taglow_title}>{item.lineTwo}</div>
                           </div>
                            <div>

                                <MyButton
                                    type="default"
                                    title={item.linkTitle}
                                    linkto={item.linkTo}
                                    addStyles={{
                                        margin:'10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                </div>
            </div>
        )):null
    )
    
    
    return (
<div className={classes.featured_container}>
    <Slider {...settings}>
     {generateSlides()}
    </Slider>
</div>
    
    );
};

export default HomeSlider;