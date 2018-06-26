import React, { Component } from 'react';
import CostumerInfo from '../../components/customerInfo';
import ProductTable from '../../components/productTable';
import CostumerCall from '../../components/customerCall';
import InvoiceInfo from  '../../components/InvoiceInfo';

class ProductSale extends React.Component {
 
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  
  render() {
    return (
   <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
    <CostumerCall/> 
    <CostumerInfo/>
    <ProductTable/>
    <InvoiceInfo/>
  </div>
    );
  }
}
export default ProductSale



