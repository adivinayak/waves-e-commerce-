import React from 'react';
import classes from '../../Resources/css/styles.module.css'
import Card from '../utils/card';

const CardBlock = (props) => {
    
const renderCards=()=>(
    
  props.list?
  props.list.map((card,i)=>(
      <div key={i}>
          <Card 
              key={i}
               {...card}
          />
      </div>
  ))
  
  :null
)


    return (
        <div className={classes.card_block}>
        <div className={classes.container}>
            {
                props.title ?
                    <div className={classes.title}>
                        {props.title}
                    </div>
                :null
            }
            <div style={{
                display:'flex',
                flexWrap:'wrap'
            }}>
                { renderCards(props.list)}
            </div>

        </div>
    </div>
    );
};

export default CardBlock;