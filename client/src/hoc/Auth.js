import React, { Component } from 'react';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress'
import classes from '../Resources/css/styles.module.css'
import { auth } from "../action/user_action"

export default function(Composedclass,reload, adminRoute=null){
class Auth extends Component {
 state={
     loading:true
 }
 componentDidMount(){
     this.props.dispatch(auth()).then(response=>{
         let user = this.props.user.userData;
          console.log(user)
     
        if(!user.isAuth){
            if(reload){
                this.props.history.push('/register_login')
            }
        }else{
            if(adminRoute && !user.isAdmin){
                this.props.history.push('/user/dashboard')
            }else{
                if(reload=== false){
                    this.props.history.push('/user/dashboard')
                }
            }
        }

        this.setState({loading:false})
    })
}

        
    render() {
     if(this.state.loading){
        return( 
        <div className={classes.main_loader}>
        <CircularProgress style={{color:'2196F3'}} thickness={7}/>
             
        </div>
         )
     }

        return (
            <Composedclass {...this.props} user={this.props.user}/>
        );
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}
return connect(mapStateToProps)(Auth)

}


