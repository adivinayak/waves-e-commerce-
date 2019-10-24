import React, { Component } from 'react';
import classes from '../Resources/css/styles.module.css';
import Header from '../components/header_footer/header/index'
import Footer from '../components/header_footer/Footer/index';
class Layout extends Component {
    render() {
        return (
            <div>
            <Header/>
                <div className={classes.page_container}>

                 {this.props.children}
                </div>
            <Footer/>

            </div>
        );
    }
}

export default Layout;