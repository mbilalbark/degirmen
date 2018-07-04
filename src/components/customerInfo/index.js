import React, {Componenet} from 'react'
// import { Form, Icon, Input, Button, Spin } from 'antd'
import moment from 'moment'
class CustomerInfo extends React.Component {
  state ={
      sirketAdi:null
  }


    render () {
        return (
            <div style={{float:'none'}} >
                <div style={{float:'left',paddingLeft:20}} >
                 <h3> Müşteri Adı   </h3> 
                 <p > {this.props.must.sirketAdi} </p>
                </div>
                <div style={{ paddingLeft:500}} > 
                 <h3> Tarih </h3>
                 <p> {moment().format('L')} </p>
                </div>
                <div style={{paddingLeft:20}}> 
                    <h3> Adres </h3> 
                    <p> {this.props.must.adres} </p>
                </div>
                <div style={{float:'left', paddingLeft:20}}>  
                    <h3> Vergi Dairesi </h3>  
                    <p> {this.props.must.vergiDairesi} </p> 
                </div>
                <div style={{paddingLeft:200}}>
                 <h3>Hesap No </h3>
                 <p> {this.props.must.hesapNo} </p> 
                </div>
            </div>
        )
    }
}

export default CustomerInfo