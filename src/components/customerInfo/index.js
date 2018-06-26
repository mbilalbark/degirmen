import React, {Componenet} from 'react'
import { Form, Icon, Input, Button, Spin } from 'antd'

class CustomerInfo extends React.Component {

    render () {
        return (
            <div style={{float:'none'}}>
                <div style={{float:'left',paddingLeft:20}} >
                 <p> Müşteri Adı   </p> 
                 <p> bilal </p>
                </div>
                <div style={{ paddingLeft:500}} > 
                 <p> Tarih </p>
                 <p> 02/10/2018 </p>
                </div>
                <div style={{paddingLeft:20}}> 
                    <p> Adres </p> 
                    <p> Bağlarbaşı mah 452. sok 14/11 </p>
                </div>
                <div style={{float:'left', paddingLeft:20}}>  
                     <p> Vergi Dairesi </p> 
                     <p> 0123456789 </p> 
                </div>
                <div style={{paddingLeft:200}}>
                 <p>Hesap No </p>
                 <p> 0123456789 </p> 
                </div>
            </div>
        )
    }
}

export default CustomerInfo