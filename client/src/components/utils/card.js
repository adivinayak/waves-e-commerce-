import React, { Component } from 'react';
import MyButton from '../utils/mybutton';
import classes from '../../Resources/css/styles.module.css';
import {connect} from 'react-redux';
import{addToCart} from './../../action/user_action';
class Card extends Component {

    renderCardImage(images){
        if(images.length > 0){
            return images[0].url
        } else {
            return '/images/image_not_availble.png'
        }
    }


    render() {
        const props = this.props;
        return (
            <div className={classes.card_item_wrapper}>
                <div
                    className={classes.image}
                    style={{
                        background:`url(${this.renderCardImage(props.images)})`
                    }}
                >  </div>
                    <div className={classes.action_container}>
                        <div className={classes.tags}>
                            <div className={classes.brand}>{props.brand.name}</div>
                            <div className={classes.name}>{props.name}</div>
                            <div className={classes.name}>${props.price}</div>
                        </div>
                    </div>
                    { props.grid ?
                        <div className={classes.description}>
                                    kshdjshdsdjshd
                        </div>
                        :null
                    }
                    <div className={classes.actions}>
                        <div className={classes.button_wrapp}>
                            <MyButton
                                type="default"
                                altClass={classes.card_link}
                                title="View product"
                                linkto={`/product_detail/${props._id}`}
                                addStyles={{
                                    margin: '10px 0 0 0'
                                }}
                            />
                        </div>
                        <div className={classes.button_wrapp}>
                            <MyButton
                                type="bag_link"
                                runAction={()=>{
                                    props.user.userData.isAuth ?
                                    this.props.dispatch(addToCart(props._id)):
                                    console.log('you need to log in')
                                }}
                            />
                        </div>
                    </div>
                
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Card);