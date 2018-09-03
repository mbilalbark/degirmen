import React, {} from 'react';
import { Redirect  } from "react-router-dom";
import { Form, Icon, Input, Button, Spin } from 'antd'
const FormItem = Form.Item;
import 'antd/dist/antd.css';
import './Login.css';
import axios from 'axios';
import { degirmenAuth, SERVERURL } from '../../config/'

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
    // localStorage.clear();
    // let user = localStorage.getItem('DegirmenLoginData')
    // //console.log(user)
    // let newU
    // if(user !== null) {
    //   newU = JSON.parse(user)
    //   //console.log(newU)
  //}
    
    this.apiUserLogin()
  }

  apiUserLogin = (uname = this.state.userName, psswrd = this.state.password) => {
    this.setState({ loading: true })
    axios({
      method: 'post',
      url: `${SERVERURL}degirmen-api/api/login.php`,
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
      if(res.data.status === 401)
      {
        this.setState({ authError: true, loading: false })
        console.log('Sikinti buyuk');
      }
      else if(res.data.status === 200)
      {
        console.log('Herşey ok');
         localStorage.setItem('DegirmenLoginData', JSON.stringify(res.data.info))
          degirmenAuth.authenticate(res.data.user, () => {
          this.setState({ redirectToReferrer: true })
        })
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
    if(this.state.redirectToReferrer){
      console.log('product')
      return(<Redirect to='/invoice'/>
    )
    }
    else
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
            rules: [{ required: true, message: 'Şifrenizi Giriniz!' }],
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
            <Button type="normal" htmlType="submit" className="login-form-button">
              Giriş
            </Button>
           }
        </FormItem>
      </Form>
    );
  }
}


export default Form.create()(Login)
