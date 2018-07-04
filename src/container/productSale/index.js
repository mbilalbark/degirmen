import React, { Component } from 'react';
import CostumerInfo from '../../components/customerInfo';
import InvoiceTable from '../../components/invoiceTable';
import CostumerCall from '../../components/customerCall';
import InvoiceInfo from  '../../components/InvoiceInfo';

class ProductSale extends React.Component {
  state = {
    amount:null,
    product:[{
         cinsi:'',    
         miktar:'',
         kg:'',
         fiyat:'',
         kdv:'',
         toplam:''
    }],
    customer:{
      sirketAdi:'',
      hesapNo:'',
      adres:'',
      vergiNumarasi:''
    },
    count:1
  }

  info = (customer, prod, amount) => {
    prod.toplam = prod.fiyat * amount
    prod.miktar = amount
    prod.key = prod.Id
    console.log(prod)
    this.setState({ product: [...this.state.product, prod], count: this.state.count + 1  })  
    this.setState({customer:customer})
  }
  
  onDelete = (id) => {
    console.log(id)
    const result = this.state.product.filter(key => key.key!=id);
    this.setState({product:result})
  }

  render() {
    return (
   <div>
    <CostumerCall  onInfoClick = {this.info}/> 
    <CostumerInfo must={this.state.customer} />
    <InvoiceTable product={this.state.product} sil={this.onDelete}/>
    <InvoiceInfo/>
  </div>
    );
  } 
}
export default ProductSale



