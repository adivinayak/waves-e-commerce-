import React from 'react';
import classes from '../../Resources/css/styles.module.css'
import MyButton from '../utils/mybutton';

const home_promotion = (props) => {
    
    const promotion = {
        img:'/images/featured/featured_home_3.jpg',
        lineOne:'Up to 40% off',
        lineTwo:'In second hand guitars',
        linkTitle:'Shop now',
        linkTo:'/shop'
    }
   
   const renderPromotion=()=>(
      
       promotion ? 
       <div className={classes.home_promotion_img}
       style={{
           background:`url(${promotion.img})`
       }}
   > <div className={classes.tag}>
           <div className={classes.tagtitle}>{promotion.lineOne}</div>
           <div className={classes.taglow_title}>{promotion.lineTwo}</div>
           <div>
               <MyButton
                   type="default"
                   title={promotion.linkTitle}
                   linkto={promotion.linkTo}
                   addStyles={{
                       margin: '10px 0 0 0'
                   }}
               />
           </div>
   </div>
   </div>
         
       :null
   )
   
    return (
        <div className={classes.home_promotion}>
            {renderPromotion()}
        </div>
    );
};

export default home_promotion;