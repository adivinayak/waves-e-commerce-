import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getBrands,getWoods,getProductsToShop} from '../action/products_actions';
import PageTop from '../components/utils/pagetop';
import classes from '../Resources/css/styles.module.css';
import CollapseCheckbox from '../components/utils/CollapseCheckboxes';
import { frets,price } from '../components/utils/form/fixed_categories';
import CollapseRadio from './utils/collapseradio';
import Loadmorecards from './utils/loadmorecards';

class Shop extends Component {
    
    state = {
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }
    
    componentDidMount(){
        this.props.dispatch(getBrands())
        this.props.dispatch(getWoods())
        this.props.dispatch(getProductsToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters
        ))

    }
    
    handlePrice=(value)=>{
        let array =[];
       const data=price;
        for(let key in data){
              if(data[key]._id === parseInt(value,10)){
                  array=data[key].array
              }       
        }
        return array;
    }
    
    showFilteredResults=(filters)=>{
        this.props.dispatch(getProductsToShop(
            0,
            this.state.limit,
            filters
        )).then(()=>{
            this.setState({
               skip:0
            })
        })
    }


    handlefilters=(filters,category)=>{
            const newFilters = {...this.state.filters}
            newFilters[category]= filters

           if(category==="price"){
             let priceValues = this.handlePrice(filters)
             newFilters[category] = priceValues
           }

          this.showFilteredResults(newFilters)

            this.setState({
                filters:newFilters
            })
    }
    loadMoreCards=()=>{
        let skip = this.state.skip + this.state.limit;

        this.props.dispatch(getProductsToShop(
            skip,
            this.state.limit,
            this.state.filters,
            this.props.products.toshop
        )).then(()=>{
            this.setState({
                skip
            })
        })
    }

    render() {
        const products = this.props.products;
        return (
            <div>
    <PageTop 
        title="Browse Products"/>
      <div className={classes.container}>
          <div className={classes.shop_wrapper}>
               <div className={classes.left}>
                   <CollapseCheckbox
                       initState={true}
                       title="Brands"
                       list={products.brands}
                       handleFilters={(filters)=> this.handlefilters(filters,'brand')}
                   />
                    <CollapseCheckbox
                                initState={false}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters)=> this.handlefilters(filters,'frets')}
                            />
              
                            <CollapseCheckbox
                                initState={false}
                                title="Wood"
                                list={products.woods}
                                handleFilters={(filters)=> this.handlefilters(filters,'wood')}
                            />
              <CollapseRadio
                                initState={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters)=> this.handlefilters(filters,'price')}
                            />
                           
                                     
                                 
               </div>
               <div className={classes.right}>
               <div className={classes.shop_options}>
                <div className={classes.shop_grids }>
                    grids
                </div>
               </div>
               <div>
                       <Loadmorecards
                           grid={this.state.grid}
                           limit={this.state.limit}
                           size={products.tosize}
                           products={products.toshop}
                           loadMore={()=> this.loadMoreCards()}

                       />

               </div>
               </div>
          </div>
      </div>
      
      
            </div>
      

        );
    }
}

const mapStateToProps =(state)=>{
    return{
        products:state.products
    }
}

export default connect(mapStateToProps)(Shop);