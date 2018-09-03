import React, { } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
;

class HeaderBar extends React.Component {

render () {
    return (
    <Layout>   
        <Header style={{ background: '#2a86d0', padding: 0 }} />
    </Layout>
    )
}

}

export default HeaderBar