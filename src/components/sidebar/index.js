import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Siderbar extends React.Component {
 
render () {
    return (
    <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      <div style={{ height: 32, background:'#0033cc', margin: 16}}/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">Müşteri Ekle</span>
        </Menu.Item>
      </Menu>
    </Sider>
    )
}


}


export default Siderbar
