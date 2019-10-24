import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from '../src/components/home/home'
import Layout from './hoc/Layout';
import RegisterLogin from './components/Registerlogin';
import Register from '../src/components/Registerlogin/Register';
import userDashboard from './components/User/index'
import Auth from './hoc/Auth';
import Shop from '../../client/src/components/shop';
import AddProducts from './Admin/add_products';
import Manage_categories from './Admin/manage_categories';
import ProductPage from './components/Product/index';
import Cart from '../src/components/User/cart';
const Routes= ()=>{
return(
<Layout>

<Switch>
<Route path='/user/dashboard' exact component={Auth(userDashboard,true)}/>
<Route path='/user/cart' exact component={Auth(Cart,true)}/>
<Route path='/admin/add_products' exact component={Auth(AddProducts,true)}/>
<Route path='/admin/manage_categories' exact component={Auth(Manage_categories,true)}/>
<Route path='/product_detail/:id' exact component={Auth(ProductPage,null)}/>
<Route path='/register' exact component={Auth(Register,false)}/>

<Route path ='/register_login' exact component={Auth(RegisterLogin,false)}/>
<Route path='/shop' exact component={Auth(Shop,null)}/>
<Route path='/' exact component={Auth(Home,null)}/>
</Switch>

</Layout>


)


}

export default Routes;
