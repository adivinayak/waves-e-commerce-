import React, { Component } from 'react';
import FormField from '../components/utils/form/formfiel';
import { update, generateData, Isformvalid,resetFields} from '../components/utils/form/formactions';
import { connect } from 'react-redux';
import { getWoods,addWood } from '../action/products_actions';
import classes from '../Resources/css/styles.module.css';

class ManageWoods extends Component {
    
    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter the wood'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
        }
    }

    showCategoryItems = () => (
        this.props.products.woods ?
            this.props.products.woods.map((item,i)=>(
                <div className={classes.category_item} key={item._id}>
                    {item.name}
                </div>
            ))
        :null
    )

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'woods');
        this.setState({
            formError: false,
            formdata: newFormdata
        });
    }

    resetFieldsHandler = () =>{
        const newFormData = resetFields(this.state.formdata,'woods');

        this.setState({
            formdata: newFormData,
            formSuccess:true
        });
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'woods');
        let formIsValid = Isformvalid(this.state.formdata,'woods')
        let existingWoods = this.props.products.woods;

        if(formIsValid){
            this.props.dispatch(addWood(dataToSubmit,existingWoods)).then(response=>{
                if(response.payload.success){
                    this.resetFieldsHandler();
                }else{
                    this.setState({formError:true})
                }
            })
        } else {
            this.setState({
                formError: true
            })
        }
    }


    componentDidMount(){
        this.props.dispatch(getWoods());
    }


    render() {
        return (
            <div className={classes.admin_category_wrapper}>
            <h1>Woods</h1>
            <div className={classes.admin_two_column}>
                <div className={classes.left}>
                    <div className={classes.brands_container}>
                        {this.showCategoryItems()}
                    </div>
                </div>
                <div className={classes.right}>
                    
                <form onSubmit={(event)=> this.submitForm(event)}>

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
                        Add wood
                    </button>

                </form>

                </div>

            </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(ManageWoods);
