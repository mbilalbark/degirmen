import React from 'react';
import { BrowserRouter as Router, Route, Redirect,withRouter  } from "react-router-dom";
import Login from '../../container/Login';
import Product from '../../container/productSale';
import Sidebar from '../../components/sidebar';
import Header from '../../components/head';
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
      <Layout>
      <Sidebar signOut={() => {
        degirmenAuth.signout(() => {
          history.push('/')
        })
      }}/>
       <Header/>
      </Layout>
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
        <Content>
          <Route exact={true} path="/" component={ Home }/>
          <Route exact path="/login" component={Login} />
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
const Home = () => <Redirect to="/product/" /> 
export default ConfigRouter