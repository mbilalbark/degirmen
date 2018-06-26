import React, {Componenet} from 'react'

class InvoiceInfo extends React.Component {

   render () {
    return (
       <div> 
           <div style={{float:'left', paddingLeft:20}}>
            <p> Yazı ile </p>
            <p>ikiyüzseksen lira sıfır kuruş </p>
           </div>
           <div style={{paddingLeft:330}}>
            <p> Toplam </p>
            <p> 280 </p>
           </div>
           <div style={{float:'left', paddingLeft:250}}> 
            <p> Kdv Oranı</p>
            <p>1. 2</p>
           </div>
           <div style={{paddingLeft:330}}>
               <p>Kdv tutarı </p>
               <p>10</p>
           </div>
           <div style={{paddingLeft:330}}>
               <p>Yekün </p>
               <p>290</p>
           </div>
       </div>
    )
}
   

}
export default InvoiceInfo