import React from 'react';
import classes from '../../Resources/css/styles.module.css'

const PageTop = (props) => {
    return (
        <div className={classes.page_top}>
          <div className={classes.container}>
                    {props.title}
          </div>
            
        </div>
    );
};

export default PageTop;