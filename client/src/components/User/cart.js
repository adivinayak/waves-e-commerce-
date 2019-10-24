import React, { Component } from 'react';
import User from '../../hoc/user';
import { getCartItems,removeCartItem} from '../../action/user_action';
import {connect} from 'react-redux';
import FontAwesomeIcon from '@fortawesome/fontawesome';
import {faFrown} from '@fortawesome/free-solid-svg-icons';
import {faSmile} from '@fortawesome/free-solid-svg-icons';
import UserproductBlock from '../utils/User/userproductblock';
import classes from '../../Resources/css/styles.module.css';

class Cart extends Component {
    
    state={
        loading: true,
        total:0,
        showTotal:false,
        showSuccess:false
    }
    
   componentDidMount(){
       let cartitem=[];
       let user = this.props.user;
       if(user.userData.cart){
           if(user.userData.cart.length>0){
               user.userData.cart.forEach(item => {
                   cartitem.push(item.id);
               });
           
       
        this.props.dispatch(getCartItems(cartitem,user.userData.cart))
        .then(()=>{
                 if(this.props.user.cartDetails.length>0){
                     this.calculateTotal(this.props.user.cartDetails)
                 }  
        })
   
    }
}
}
  calculateTotal=(cartDetails)=>{
               let total=0;
               cartDetails.forEach(item=>{
                   total += parseInt(item.price,10)*item.quantity
               });
                this.setState({
                    total,
                    showTotal:true
                })

            }
shownoCartItem=()=>(
    <div className={classes.cart_no_items}>
          
           <div>
               You have no items
           </div>
    </div>
)


removeFromCart=(id)=>{
           this.props.dispatch(removeCartItem(id))
           .then(()=>{
            if(this.props.user.cartDetails.length<=0){
                     this.setState({
                         showTotal:false
                     })
            
                    }else{
                        this.calculateTotal(this.props.user.cartDetails)
                    }
           })
}
    render() {
        return (
            <User>
               <div>
                <h1> My Cart</h1>
                <div className={classes.user_cart}>
                     <UserproductBlock
                         products={this.props.user}
                         type="cart"
                         removeItem={(id)=> this.removeFromCart(id)}
                     />
                 {
                     this.state.showTotal ?
                 <div>
                 <div className={classes.user_cart_sum}>
                    <div>
                        Total Amount =${this.state.total};
                    </div>
                 </div>
                 </div>
                 : 
                 this.state.showSuccess ?
                  <div className={classes.cart_success}>
                     <FontAwesomeIcon icon={faSmile}/>
                       <div>
                           Thank You
                       </div>
                  </div>
                 :    
                 this.shownoCartItem()
                 }

                </div>
                {this.state.showTotal?
                <div className={classes.paypal_button_container}>
                    Paypal
                </div>:null
                }
                </div>
              
           </User>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Cart);