import React, { Component } from 'react';
import UserLayout from '../hoc/user';
import Managebrands from './managebrands';
import ManageWoods from './managewoods';



class Manage_categories extends Component {
    render() {
        return (
            <UserLayout>
            <Managebrands/>
            <ManageWoods/>
            </UserLayout>
        );
    }
}

export default Manage_categories;