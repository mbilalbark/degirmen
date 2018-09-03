import React, {} from 'react';
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
    count:1,
    Invoice:{
      fiyat:0,
      kdvToplam:0,
      yekun:0
    }
  }

  info = (customer, prod, amount) => {
    prod.toplam = prod.fiyat * amount
    prod.miktar = amount
    prod.key = prod.Id
    console.log(prod)
    this.state.Invoice.fiyat += prod.fiyat * amount
    this.state.Invoice.kdvToplam += ( prod.fiyat * amount / 100 ) * prod.kdv
    this.state.Invoice.yekun += ( prod.fiyat * amount / 100 ) * prod.kdv + prod.fiyat * amount 
    this.setState({Invoice:this.state.Invoice})
    console.log('fatura',this.state.Invoice)
    this.setState({ product: [...this.state.product, prod], count: this.state.count + 1  })  
    this.setState({customer:customer})    
  }
  // del
  onDelete = (id) => {
    console.log(id)
    const result = this.state.product.filter(key => key.key!=id);
    const res = this.state.product.filter(key => key.key==id)[0];
    console.log('silinen', res.fiyat)
    this.state.Invoice.fiyat -= res.toplam
    this.state.Invoice.kdvToplam -= (res.toplam/100 * res.kdv)
    this.state.Invoice.yekun -= ((res.toplam/100 * res.kdv) + res.toplam)
    this.setState({Invoice:this.state.Invoice})
    this.setState({product:result})
  }

  render() {
    return (
   <div>
    <CostumerCall  onInfoClick = {this.info}/> 
    <CostumerInfo must={this.state.customer} />
    <InvoiceTable product={this.state.product} sil={this.onDelete}/>
    <InvoiceInfo pro={this.state.Invoice}/>
  </div>
    );
  } 
}
export default ProductSale



