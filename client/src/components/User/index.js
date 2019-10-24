import React from 'react';
 import User from '../../hoc/user'
 import classes from '../../Resources/css/styles.module.css'
import MyButton from '../utils/mybutton';
const userDashboard = ({user}) => {
    return (
        
        <User>
<div>


             <div className={classes.user_nfo_panel}>
               <h1> User Information</h1>
                  <div>
                      <span>
                    {user.userData.name}
                      </span>
                      <span>
                      {user.userData.lastname}
                      </span>
                      <span>
                      {user.userData.email}
                      </span>
                  </div>
                  <MyButton 
                      type="default"
                      title="edit account info"
                    linkto="/user/user_profile"
                  />
               </div>      
                <div  className={classes.user_nfo_panel}>
                
                    <h1> History Purchases </h1>
                    <div className={classes.user_product_block_wrapper}>
                        History
                    </div>
                </div>

             </div>
        </User>
       
    )}
export default userDashboard;