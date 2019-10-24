import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from '../../Resources/css/styles.module.css'
import FormField from '../utils/form/formfiel'
import { update,generateData,Isformvalid } from '../utils/form/formactions'
import { registeruser } from '../../action/user_action';


class Register extends Component {
   state={
    formError:false,
    formSuccess:'',
    formdata:{
        name:{
            element: 'input',
            value :'',
            config:{
                name:'name_input',
                type:'text',
                placeholder:'enter your name'
            },
            validation:{
                required:true,
            
            },
            valid:false,
            touched:false,
            validationmessage:''
},
lastname:{
    element: 'input',
    value :'',
    config:{
        name:'lastname_input',
        type:'text',
        placeholder:'enter your lastname'
    },
    validation:{
        required:true,
    
    },
    valid:false,
    touched:false,
    validationmessage:''
},
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


  },
  confirmPassword:{
            
    element: 'input',
    value :'',
    config:{
        name:'confirm_password_input',
        type:'password',
        placeholder:'confirm your password'
    },
    validation:{
        required:true,
        confirm:'password'
    },
    valid:false,
    touched:false,
    validationmessage:''


  }    
    

  

}


   }
   
   updateform=(element)=>{
    const newformdata = update(element,this.state.formdata,'Register');
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
        this.props.dispatch(registeruser(dataToSubmit))
          .then(response=>{
           if(response.payload.success){
                this.setstate=({
                    formError:false,
                    formSuccess:true
                });
                setTimeout(()=>{
              this.props.history.push('/register_login');

                },3000)
            }else{
                this.setstate=({

                    formError:true
                })
            }  

        }).catch(e =>{
            this.setState=({formError: true })
        })

    }else{
        this.setState({
            formError:true
        })
    }
 
 
 
 }
    render() {
        return (
            <div className={classes.page_wrapper}>
                <div className={classes.container}>
                  <div className={classes.register_login_container}>
                      <div className={classes.left}>
                           <form onSubmit={(event)=>this.submitForm(event)}>
                                <h2>Personal Information</h2>
                                  <div className={classes.form_block_two}>
                                     <div className={classes.block}>
                                     <FormField
                                      id={'name'}
                                      formdata={this.state.formdata.name}
                                       change={(element) => this.updateform(element)}
                                />
                                
                               </div>
                               <div className={classes.block}>
                                     <FormField
                                      id={'lastname'}
                                      formdata={this.state.formdata.lastname}
                                       change={(element) => this.updateform(element)}
                                />
                                
                                     </div>
                                 

                                  </div>
                               <div>
                                  <FormField
                                    id={'email'}
                                    formdata={this.state.formdata.email}
                                    change={(element) => this.updateform(element)}
                                   />
                            </div>

                            <h2>Account Information</h2>
                            <div className={classes.form_block_two}>
                                     <div className={classes.block}>
                                     <FormField
                                      id={'password'}
                                      formdata={this.state.formdata.password}
                                       change={(element) => this.updateform(element)}
                                />
                                
                               </div>
                               <div className={classes.block}>
                                     <FormField
                                      id={'confirmPassword'}
                                      formdata={this.state.formdata.confirmPassword}
                                       change={(element) => this.updateform(element)}
                                />
                                
                                     </div>

                        
                                 </div>
                                 {this.state.formError ? 
              <div className={classes.error_label}>please check your data </div>
              : null}
         <button onClick={(event)=> this.submitForm(event)}> create your account</button>                     
                           </form>
                      </div>
                  </div>

                </div>
            </div>
        );
    }
}

export default connect()(Register);