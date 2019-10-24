import React from 'react';
import { Link } from 'react-router-dom';
import classes from './../Resources/css/styles.module.css'
import {connect} from 'react-redux';



const links = [
 {
     name:'My account',
     linkTo: '/user/dashboard'
 },         
{
    name:'User information',
    linkTo: '/user/user_profile'

},
{
    name:'My Cart',
linkTo: '/user/cart'
}
]

const admin =[
  {  
      name:'Site Info',
     linkTo: '/admin/site_info'
 },
 {
    name:'Add Products',
    linkTo: '/admin/add_products'
},         

 
 {
    name:'Manage categories',
    linkTo: '/admin/manage_categories'         

 }         
]
const User = (props) => {
  
  const generateLinks=(links)=>(
               links.map((item,i)=>(
              <Link to={item.linkTo} key={i}>
                 {item.name}
              </Link>

               ))
  )
    
    
    
    return (
        <div className={classes.container}>
         <div className={classes.user_container}>
         <div className={classes.user_left_nav}>
           <h2>My Account</h2>
           <div className={classes.links}>
                  {generateLinks(links)}
           </div>
         {
                props.user.userData.isAdmin ?
                <div>
                    <h2>Admin</h2>
                    <div className={classes.links}>
                    {generateLinks(admin)}
                    </div>
                </div>
                :null
         }
         
         </div>
         

         <div className={classes.user_right}>
               {props.children}
         </div>
         </div>
            
        </div>
    )};
const mapStateToProps=(state)=>{
return{
    user:state.user
}
}

export default connect(mapStateToProps)(User);