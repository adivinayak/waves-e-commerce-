import React, { Component } from 'react';
import FormField from '../components/utils/form/formfiel';
import { update, generateData, Isformvalid,resetFields} from '../components/utils/form/formactions';
import { connect } from 'react-redux';
import { getBrands,addBrand } from '../action/products_actions';
import classes from '../Resources/css/styles.module.css';


class Managebrands extends Component {
    state={
        formError:false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your Brand'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
                
            }
    }
}
    
  showCategory=()=>(
this.props.products.brands?
this.props.products.brands.map((item,i)=>(
   <div className={classes.category_item} key={item._id}>
                 {item.name}
   </div>
)):null

  )

  updateForm=(element)=>{
    const newformdata = update(element,this.state.formdata,'Products');
    this.setState({
        formError:false,
        formdata:newformdata
    })
    }
  resetFieldHandler=()=>{
    const newFormData = resetFields(this.state.formdata,'products')

    this.setState({
        formdata: newFormData,
        formSuccess:true
    });
  }

    submitForm=(event)=>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'products');
        let formIsValid = Isformvalid(this.state.formdata,'products');  
        let existingBrands= this.props.products.brands;
      
        if(formIsValid){
           this.props.dispatch(addBrand(dataToSubmit,existingBrands))
           .then(response=>{
               if(response.payload.success){
                   this.resetFieldHandler()
               }else{
                   this.setState({
                       formError:true
                   })
               }
           })

        }else{
            this.setState({
                formError:true
            })
        }
     
     
    }    
  componentDidMount(){
           this.props.dispatch(getBrands())
  }

    render() {
        return (
            <div className={classes.admin_category_wrapper}>
                           <h1>Brands</h1>
                           <div className={classes.admin_two_column}>
                              <div className={classes.left}>
                                <div className={classes.brands_container}>
                                {this.showCategory()}
                                </div>


                              </div>
                         <div className={classes.right}>
                         <form onSubmit={(event)=>this.submitForm(event)}>
                         
                         <FormField
                   id={'name'}
                   formdata={this.state.formdata.name}
                    change={(element) => this.updateForm(element)}
            />
            
            {this.state.formError ?
                            <div className={classes.error_label}>
                                Please check your data
                                        </div>
                            : null}
                        <button onClick={(event) => this.submitForm(event)}>
                            Add product
                        </button>


                         </form>
                         </div>

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
export default connect( mapStateToProps)(Managebrands);