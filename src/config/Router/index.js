import React from 'react';
import { BrowserRouter as Router, Route, Redirect,withRouter  } from "react-router-dom";
import Login from '../../container/Login';
import Invoice from '../../container/productSale';
import Sidebar from '../../components/sidebar';
import Header from '../../components/head';
import Customers from '../../container/Customers';
import Product from '../../container/Products'

import { Layout, } from 'antd'
import { degirmenAuth } from '../index.js'

const { Content, Footer } = Layout
const PrivateRoute = ({ component: Component, ...rest }) => (
 
    <Route {...rest} render={props => (
        degirmenAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          from: props.location,
          pathname: '/login',
        }}/>
      )
    )}/>
  )

  const AuthButton = withRouter(({ history }) => (
    degirmenAuth.isAuthenticated ? (
      <div>
      <Sidebar signOut={() => {
        degirmenAuth.signout(() => {
          history.push('/')
        })
      }}/>
   
      </div>
    ) 
    : ( 
      <br/>// <a href='/login'>Giriş Yap</a>
    )
  ))
const Home = () => <Redirect to="/invoice/" /> 
class ConfigRouter extends React.Component {

    render() {
      return (
      <Router>
        <div>
        <Layout>
         { <AuthButton/> }
         <Layout>
          <Header/>
          <Content style={{ padding: 24, background: '#fff', minHeight: 360 }}>
           <Route exact={false} path="/" component={ Login }/>
           <Route exact path="/login" component={Login} />
           <PrivateRoute path="/invoice" component={Invoice} />
           <PrivateRoute path="/customers" component={Customers} />
           <PrivateRoute path="/product" component={Product} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>DEĞİRMEN</Footer>
          </Layout>
         </Layout>
        </div>
      </Router>
      )
    }
  }

export default ConfigRouter