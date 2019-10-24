import React from 'react';
import CardBlockShop from './card_block_shop';
import classes from './../../Resources/css/styles.module.css';

const Loadmorecards = (props) => {
    return (
        <div>
            <div>
           <CardBlockShop 
               grid={props.grid}
               list={props.products}
           />
            </div>

{
    props.size > 0 && props.size >= props.limit ?
    <div className={classes.load_more_container}>
              <span onClick={()=> props.loadMore()}>
                  Load More
              </span>
            </div>:null
}            

           
        </div>
    );
};

export default Loadmorecards;