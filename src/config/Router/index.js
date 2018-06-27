import React from 'react';
import { BrowserRouter as Router, Route, Redirect,withRouter  } from "react-router-dom";
import Login from '../../container/Login';
import Product from '../../container/productSale';
import Sidebar from '../../components/sidebar';
import Header from '../../components/head';
import Customers from '../../container/Customers';


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
  
class ConfigRouter extends React.Component {

    render() {
      return (
      <Router>
        <div>
        <Layout>
         { <AuthButton/> }
         <Layout>
          <Header/>
          <Content style={{ margin: '24px 16px 0' }}>
           <Route exact={true} path="/" component={ Home }/>
           <Route exact path="/login" component={Login} />
           <PrivateRoute path="/product" component={Product} />
           <PrivateRoute path="/customers" component={Customers} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>DEĞİRMEN</Footer>
          </Layout>
         </Layout>
        </div>
      </Router>
      )
    }
  }
const Home = () => <Redirect to="/product/" /> 
export default ConfigRouter