import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageTop from '../utils/pagetop';
import {getProductDetail,clearProductDetail} from '../../action/products_actions';
import classes from '../../Resources/css/styles.module.css';
import ProdNfo from './prodinfo';
import ProdImg from './ProdImg';
import {addToCart} from '../../../src/action/user_action';
class ProductPage extends Component {
    
    componentDidMount(){
        const id= this.props.match.params.id;
        this.props.dispatch(getProductDetail(id)).then(response=>{
            if(!this.props.products.prodDetail){
                this.props.history.push('/');
            }
        })
    }
    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }
    addToCartHandeler=(id)=>{
        this.props.dispatch(addToCart(id))
    }
    render()  {
        return (
            <div>
     <PageTop
         title="Product Detail"
     />           
     <div className={classes.container}>
        {
            this.props.products.prodDetail ? 
            <div className={classes.product_detail_wrapper}>
            <div className={classes.left}>
                 <div style={{width:'500px'}}>
                 <ProdImg
                     detail={this.props.products.prodDetail}
                 />
                 </div>

               
            </div>
            <div className={classes.right}>
                      <ProdNfo
                          addToCart={(id)=>this.addToCartHandeler(id)}
                          detail={this.props.products.prodDetail}

                      />
            </div>

            </div>:null
        }
     </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
return{
    products:state.products
}
}

export default connect(mapStateToProps)(ProductPage);