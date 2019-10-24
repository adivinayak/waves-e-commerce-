import React from 'react';
import classes from '../../../Resources/css/styles.module.css';
import { mergeClasses } from '@material-ui/styles';


const UserproductBlock = ({products,removeItem}) => {
    
    const renderCartImage=(images)=>{
               if(images.length>0){
                   return images[0].url
               }
               else{
                   return '/images/image_not_availble.png'
               }
            }
    
    

 

    const renderItems=()=>(
     products.cartDetails?
    products.cartDetails.map(product=>(
                <div className={classes.user_product_block} key={product._id}>
                    <div className={classes.item}>
                      <div className={classes.image}
                            style={{background:`url(${renderCartImage(product.images)})`}}        >

                      </div>

                    </div>
                    <div className={classes.item}>
                         <h4>Product Name</h4>
                         <div>
                             {product.brand.name} {product.name}
                         </div>
                    </div>
                    <div className={classes.item}>
                         <h4>Quantity</h4>
                         <div>
                             {product.quantity}
                         </div>
                    </div>
                    <div className={classes.item}>
                         <h4>Price</h4>
                         <div>
                             {product.price}
                         </div>
                    </div>
                 <div className={classes.itembtn}>
                    <div className={classes.cart_remove_btn}
                        onClick={()=> removeItem(product._id)}>
                           
                Remove
                    </div>

                 </div>

                </div>

        )):null
    )
    
    return (
        <div>
            {renderItems()}
          
        </div>
    );
};

export default UserproductBlock;