import React from 'react';
import classes from '../../Resources/css/styles.module.css';
import Card from '../utils/card';

const CardBlockShop = (props) => {
    const renderCards=()=>(
      props.list ?  
      props.list.map(card=>(
            <Card
                key={card._id}
                {...card}
                grid={props.grid}
            />
        )):null
    )
    return (
        <div className={classes.card_block_shop}>
          <div>
              <div>
                  {props.list ? 
                  props.list.length ===0 ?
                  <div className={classes.no_result}>
                      sorry,no result
                  </div>
                  :null
                  :null}
                  {renderCards(props.list)}
              </div>
          </div>

            
        </div>
    );
};

export default CardBlockShop;