import React, {} from 'react'
import { Modal, Button, Form, Input, Icon } from 'antd'
import axios from 'axios';   
import { SERVERURL } from '../../config/'
const FormItem = Form.Item;

class ProductsAdd extends React.Component {
    
    state = { 
        visible: false,
        cinsi:null,
        kg:null,
        fiyat:null,
        kdv:null
        }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
    handleOk = (e) => {
      this.setState({
        visible: false,
      });
      this.apiProductAdd();
    }
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }
    apiProductAdd() {
        axios({
            method: 'post',
            url: `${SERVERURL}degirmen-api/api/product.php`,
            headers : {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          },
            data: {
            productAdd: {
                cinsi: this.state.cinsi,
                kg: this.state.kg,
                fiyat:this.state.fiyat,
                kdv:this.state.kdv
              }
            } 
          })
          .then((res) => {
            console.log(res)
          })
          .catch(err => console.log(err))
    }
     onChangeCinsi = (e) => {
        this.setState({cinsi:e.target.value})
      }
      onChangeKg = (e) => {
        this.setState({kg: e.target.value})
      }
      onChangeFiyat = (e) => {
         this.setState({fiyat:e.target.value})
      }
      onChangeKdv = (e) => {
        this.setState({kdv:e.target.value})
      }

     render(){
         return (
             <div style={{paddingBottom:10}}>
                 <Button type="primary" onClick={this.showModal}>Ürün Ekle</Button>
                <Modal
                title="Ürün Ekleme Formu"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>                     
                            <Input prefix={<Icon type="select" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Cinsi"  onChange={this.onChangeCinsi}/>                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="usb" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Kg" onChange={this.onChangeKg} />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="barcode" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Fiyat"  onChange={this.onChangeFiyat}/>                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="wallet" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Kdv"  onChange={this.onChangeKdv} />                
                        </FormItem>
                    </Form>
                </Modal>
          </div>
         )
     }
}
export default ProductsAdd