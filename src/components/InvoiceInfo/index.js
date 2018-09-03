import React, {} from 'react'

class InvoiceInfo extends React.Component {

   render () {
    return (
       <div> 
           <div style={{float:'left', paddingLeft:20}}>
            <h3>Yazı ile</h3>
            <p>ikiyüzseksen lira sıfır kuruş </p>
           </div>
           <div style={{paddingLeft:330}}>
            <h3> Toplam </h3>
            <p>{this.props.pro.fiyat}</p>
           </div>
           <div style={{float:'left', paddingLeft:250}}>
           </div>
           <div style={{paddingLeft:330}}>
               <h3>Kdv tutarı </h3>
               <p>{this.props.pro.kdvToplam}</p>
           </div>
           <div style={{paddingLeft:330}}>
               <h3>Yekün </h3>
               <p>{this.props.pro.yekun}</p>
           </div>
       </div>
    )
}
   

}
export default InvoiceInfo