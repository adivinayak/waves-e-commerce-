import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from '../../Resources/css/styles.module.css'
import FormField from '../utils/form/formfiel'
import { update,generateData,Isformvalid } from '../utils/form/formactions'
import { loginuser } from '../../action/user_action';
import { withRouter } from 'react-router-dom';

class Login extends Component {

   state = {
           formError:false,
           formSuccess:'',
           formdata:{
            email:{
                 element: 'input',
                 value :'',
                 config:{
                     name:'email_input',
                     type:'email',
                     placeholder:'enter your email'
                 },
                 validation:{
                     required:true,
                     email : true
                 },
                 valid:false,
                 touched:false,
                 validationmessage:''

            },
            password:{
            
              element: 'input',
              value :'',
              config:{
                  name:'password_input',
                  type:'password',
                  placeholder:'enter your password'
              },
              validation:{
                  required:true,
                  
              },
              valid:false,
              touched:false,
              validationmessage:''


            }
           }
   }
updateform=(element)=>{
const newformdata = update(element,this.state.formdata,'login');
this.setState({
    formError:false,
    formdata:newformdata
})
}

submitForm=(event)=>{
   event.preventDefault();
   
   let dataToSubmit = generateData(this.state.formdata,'login');
   let formIsValid = Isformvalid(this.state.formdata,'login');  
   

   if(formIsValid){
   this.props.dispatch(loginuser(dataToSubmit)).then(response=>{
       if(response.payload.loginSuccess){
           this.props.history.push('/user/dashboard');
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


    render() {
        return (


             <div className={classes.signin_wrapper}>
                <form onSubmit={(event)=> this.submitForm(event)}>

                 <FormField
                     id={'email'}
                    formdata={this.state.formdata.email}
                    change={(element) => this.updateform(element)}
                 />
                <FormField
                     id={'password'}
                    formdata={this.state.formdata.password}
                    change={(element) => this.updateform(element)}
                 />
                </form>
              {this.state.formError ? 
              <div className={classes.error_label}>please check your data </div>
              : null}
         <button onClick={(event)=> this.submitForm(event)}> Log in </button>
            </div>
        );
    }
}

export default connect()(withRouter(Login));
