import React from 'react';
import MyButton from '../utils/mybutton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruck} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { mergeClasses } from '@material-ui/styles';
import classes from '../../Resources/css/styles.module.css';

const prodinfo = (props) => {


   const detail=props.detail;
    
   const showProdTags=(detail)=>(
       <div className={classes.product_tags}>
           {
               detail.shipping ?
               <div className={classes.tag}>
                   <div><FontAwesomeIcon icon={faTruck}/></div>
               <div className={classes.tag_text}>
                     <div>Free Shipping</div>
                     <div> And Return</div>
               </div>
               
               </div>
               :null
           }

           {

            detail.available ?
               <div className={classes.tag}>
                   <div><FontAwesomeIcon icon={faCheck}/></div>
               <div className={classes.tag_text}>
                     <div>Available</div>
                     <div> In Store</div>
               </div>
               
               </div>
               :<div className={classes.tag}>
                   <div><FontAwesomeIcon icon={faTimes}/></div>
               <div className={classes.tag_text}>
                     <div>Not Available</div>
                     <div> Pre Order Only</div>
               </div>
               
               </div>
           }
       </div>
   )

const showProdActions=(detail)=>(
    <div className={classes.product_actions}>
    <div className={classes.price}>
               ${detail.price}
    </div>
   <div className={classes.cart}>
         <MyButton
             type="add_to_cart_link"
             runAction={()=>{
                 props.addToCart(detail._id)
             }}
         />
   </div>
    </div>
)

const showProdSpecifications = (detail) => (
    <div className={classes.product_specifications}>
        <h2>Specs:</h2>
        <div>
            <div className={classes.item}>
                <strong>Frets:</strong> {detail.frets}
            </div>
            <div className={classes.item}>
                <strong>Wood:</strong> {detail.wood.name}
            </div>
        </div>
    </div>
)

    return (
        <div>
            <h1>
                {detail.brand.name} {detail.name}
            </h1>             
            <p>
                {detail.description}
            </p>
            {showProdTags(detail)}
            {showProdActions(detail)}
            {showProdSpecifications(detail)}
        </div>
    );
};

export default prodinfo;