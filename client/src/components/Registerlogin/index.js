import React from 'react';
import classes from '../../Resources/css/styles.module.css'
import MyButton from '../utils/mybutton'
import Login from '../Registerlogin/Login'

const RegisterLogin = () => {
    return (
        <div className={classes.page_wrapper}>
            <div className={classes.container}>
              <div className={classes.register_login_container}>
                  <div className={classes.left}>
                     <h1> New Customers</h1>
                        <p> In this exercise, the idea is to write a paragraph that would be a random passage from a story. An effective paragraph is one that has unity (it isn’t a hodgepodge of things), focus (everything in the paragraph stacks up to the whatever-it-is the paragraph is about), and coherence (the content follows smoothly). For this exercise, the paragraph should be quick to read--say, not be more than 100 words long.
</p>
                    <MyButton
                           type="default"
                           title="create an account"
                           linkto="/register"
                           addstyles={{

                               margin:'10px 0 0 0'
                           }}

                    />

                  </div>
               <div className={classes.right}>

                   <h2> registered customers</h2>
                <p>if you have an account please log in</p>
                <Login/>
               </div>


              </div>


            </div>

        </div>
    );
};

export default RegisterLogin;