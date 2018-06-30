import React, { Component } from 'react';
import CostumerInfo from '../../components/customerInfo';
import InvoiceTable from '../../components/invoiceTable';
import CostumerCall from '../../components/customerCall';
import InvoiceInfo from  '../../components/InvoiceInfo';

class ProductSale extends React.Component {
   
  render() {
    return (
   <div>
    <CostumerCall/> 
    <CostumerInfo/>
    <InvoiceTable/>
    <InvoiceInfo/>
  </div>
    );
  }
}
export default ProductSale



