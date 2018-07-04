import React, {Componenet} from 'react'
import { Select,InputNumber, Button,Form } from 'antd';
import axios from 'axios';   
import { SERVERURL } from '../../config/'
const Option = Select.Option;
const FormItem = Form.Item;
const products = [];
const customers = [];
class CustomerCall extends React.Component {


  state = {
    product: [],
    customer:[],
    selectProduct:null,
    selectCustomer:null,
    amount:null
  }

componentWillMount () {
 this.productList()
 this.customerList()
}
customerList(){
  axios({
    method: 'post',
    url: `${SERVERURL}degirmen-api/api/customer.php`,
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  },
    data: {
     customerList:"list"
    }
  })
  .then((res) => {
    console.log(res.data.info)
    this.state.customer = res.data.info  
    this.state.customer.forEach(function(element) {
      customers.push(<Option key={element.Id}>{element.sirketAdi}</Option>);
    });
  })
  .catch(err => console.log(err))
}
productList() {
  axios({
    method: 'post',
    url: `${SERVERURL}degirmen-api/api/product.php`,
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  },
    data: {
     productList:"list"
    }
  })
  .then((res) => {
    console.log(res.data.info)
    this.state.product = res.data.info  
    this.state.product.forEach(function(element) {
      products.push(<Option key={element.Id}>{element.cinsi}</Option>);
    });
  })
  .catch(err => console.log(err))
}
productChange = (value) => {
   let pro = this.state.product.find(function(element) {
    return element.Id == value;
  })
  console.log('pro',pro)
  this.setState({selectProduct:pro})

}
customerChange = (value) => {
  let cost = this.state.customer.find(function(element) {
    return element.Id == value;
  })
  this.setState({selectCustomer:cost})
}
onAmountChange = (value) => {
  this.setState({amount:value})
}
onHandle () {

}
 
render() {
  return (
   <div>   
     <div style={{float:'left', paddingLeft:20}} >
          <h3> Ürünler </h3> 
          <Select style={{ width: 120 }} onChange={this.productChange}>
            {products}
          </Select>     
      </div>
      <div style={{float:'left', paddingLeft:20}}>
        <h3> Miktar </h3> 
        <InputNumber onChange={this.onAmountChange} />
      </div>
      <div style={{float:'left', paddingLeft:20, paddingRight:20}}>
          <h3 > Müsteriler </h3>
          <Select style={{ width: 120}} onChange={this.customerChange}>
            {customers}
          </Select> 
      </div>
      <div style={{ marginLeft:30, paddingTop:30, paddingBottom:10}}>
          <Button type="primary" onClick={(e) => this.props.onInfoClick(this.state.selectCustomer, this.state.selectProduct, this.state.amount)} >Ekle</Button>  
      </div>  
  </div>

        )
    }
}
export default CustomerCall
