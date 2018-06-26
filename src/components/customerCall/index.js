import React, {Componenet} from 'react'
import { Select,Input, Button } from 'antd';
const Option = Select.Option;

class CustomerCall extends React.Component {

    render() {
  return (
   <div>
      <div style={{float:'left', paddingLeft:20}} >
        <p> Ürünler </p> 
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      <div style={{float:'left', paddingLeft:20}}>
        <p> Miktar </p> 
        <Input placeholder="large size" />  
      </div>
      <div style={{float:'left', paddingLeft:20, paddingRight:20}}>
        <p > Müsteriler </p>
        <Select defaultValue="lucy" style={{ width: 120}} onChange={this.handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      <div style={{ marginLeft:30, paddingTop:30, paddingBottom:10}}>
        <Button type="primary" >Ekle</Button>
      </div>
  </div>
        )
    }
}
export default CustomerCall