import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
const { Sider } = Layout;

class Siderbar extends React.Component {
 
render () {
    return (
    <Sider breakpoint="lg"
    style ={{height: '100vh'}}
    collapsedWidth="0"
    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
      <div style={{ height: 32, background:'#0033cc', margin: 16}}/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text"><Link to="/customers" style={{color:'white'}}>Müşteriler</Link></span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="barcode" />
          <span className="nav-text"><Link to="/product" style={{color:'white'}}>Fatura</Link></span>
        </Menu.Item>
      </Menu>
    </Sider>
    )
}


}


export default Siderbar
