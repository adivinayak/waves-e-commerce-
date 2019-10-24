import React from 'react';
import classes from '../../Resources/css/styles.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';



const MyButton = (props) => {
    
    const buttons=()=>{
          let template=''

          switch(props.type){
          
          
            case "default":
             template = <Link className={!props.altClass ? classes.link_default: props.altClass } 
                             to={props.linkto}
                           {...props.addstyles}
             >
                           
                 {props.title}
             </Link>
              break;
              case "bag_link":
                    template = 
                        <div className={classes.bag_link}
                            onClick={()=>{
                                props.runAction();
                            }}
                        >
                            c
                        </div>
             break;
             case "add_to_cart_link":
                 template=
                 <div className={classes.add_to_cart_link}
                      onClick={()=>{
                          props.runAction();
                      }}
                 >
                       <FontAwesomeIcon
                           icon={faShoppingBag}
                       />
                       Add to cart
                 </div>
             break;
             default:

                template='';
          
          
            }
             return template
    }
    
    
    
    
    return (
        <div className={classes.my_link}>
            {buttons()}
        </div>
    );
};

export default MyButton;