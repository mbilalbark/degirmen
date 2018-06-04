import React, { Component } from 'react';
import { Form, Icon, Input, Button, Spin } from 'antd'
const FormItem = Form.Item;
// import logo from './logo.svg';
 import './App.css';

class App extends React.Component {

  state = {
    redirectToReferrer: false,
    userName: null,
    password: null,
    loading: false,
    authError:false,
    userid: null
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleLogin} className="login-form">
        <h2>Degirmen</h2>
        { this.state.authError && <p>Bilgileriniz Hatalı</p> }
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Kullanıcı adınızı giriniz!' }],
          })(
            <Input 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              placeholder="Kullanıcı Adı"
              onChange={this.onChangeUserName}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Şifrenizi giriniz!' }],
          })(
            <Input 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              type="password" 
              placeholder="Şifre"
              onChange={this.onChangePassword}
            />
          )}
        </FormItem>
        <FormItem>
          { 
            this.state.loading ? <Spin size="large" /> : 
            <Button type="primary" htmlType="submit" className="login-form-button">
              Giriş
            </Button>
           }          
        </FormItem>
      </Form>
    );
  }
}


export default Form.create()(App)
