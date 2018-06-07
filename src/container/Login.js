import React, { Component } from 'react';
import { Form, Icon, Input, Button, Spin } from 'antd'
const FormItem = Form.Item;
import 'antd/dist/antd.css';
import './Login.css';
import axios from 'axios';   
import { degirmenAuth, SERVERURL } from '../config/routes'
class Login extends React.Component {


  state = {
    redirectToReferrer: false,
    userName: null,
    password: null,
    loading: false,
    authError:false,
    userid: null
  }


  componentWillMount = () => 
  {  
    //  localStorage.clear();
    // let user = localStorage.getItem('DegirmenLoginData')
    // if(user !== null) {
    //   user = JSON.parse(user)
    //   this.apiUserLogin(user.local.username, user.local.password)
    // }
  }

  apiUserLogin = (uname = this.state.userName, psswrd = this.state.password) => {
    this.setState({ loading: true })
    axios({
      method: 'post',
      url: 'http://localhost/Degirmen/api/login.php',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    },
      data: {
        adSoy: uname,
        sifre: psswrd
      }
    })
    .then((res) => {
      console.log(res);
      if(res.status === 401)
      {
        this.setState({ authError: true, loading: false })
        console.log('Sikinti buyuk');   
      }
      else if(res.status === 200)
      { 
        console.log('Herşey ok');      
        //  localStorage.setItem('DegirmenLoginData', JSON.stringify(res.data.user))
        //   degirmenAuth.authenticate(res.data.user, () => {
        //   this.setState({ redirectToReferrer: true })
        // })
      }
    })
    .catch(err => console.log(err))
  }

onChangeUserName = (e) => {
  this.setState({ userName: e.target.value })
}

onChangePassword = (e) => {
  this.setState({ password: e.target.value })
}

  handleLogin = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.apiUserLogin()
      }
      else
      {
        //hata
      }
    });
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


export default Form.create()(Login)
