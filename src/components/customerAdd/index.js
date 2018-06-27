import React,{Component} from 'react'
import { Modal, Button, Form, Input, Icon } from 'antd'
import axios from 'axios';   
import { SERVERURL } from '../../config/'
const FormItem = Form.Item;

class CoustomerAdd extends React.Component {

    state = { 
        visible: false,
        sirketAdi:null,
        adres:null,
        vergiDairesi:null,
        hesapNo:null,
        telefon:null,
        faks:null,
        bankaAdi:null
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
      this.apiCustomerAdd();
    }
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }
    apiCustomerAdd() {
        axios({
            method: 'post',
            url: `${SERVERURL}degirmen-api/api/customer.php`,
            headers : {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          },
            data: {
             customerAdd: {
                sirketAdi: this.state.sirketAdi,
                bankaAdi: this.state.bankaAdi,
                hesapNo:this.state.bankaAdi,
                telefon:this.state.telefon,
                faks:this.state.faks,
                vergiDairesi:this.state.vergiDairesi,
                adres:this.state.adres
              }
            }
          })
          .then((res) => {
            console.log(res.data.info)
          })
          .catch(err => console.log(err))
    }
    onChangeSirketAdi = (e) => {
      this.setState({sirketAdi:e.target.value})
    }
    onChangeVergiDairesi = (e) => {
        this.setState({vergiDairesi: e.target.value})
    }
    onChangeAdres = (e) => {
        this.setState({adres:e.target.value})
    }
    onChangeHesapNo = (e) => {
        this.setState({hesapNo:e.target.value})
    }
    onChangeTelefon = (e) => {
        this.setState({telefon:e.target.value})
    }
    onChangeFaks = (e) => {
        this.setState({faks: e.target.value})
    } 
    onChangeBankaAdi = (e) => {
        this.setState({bankaAdi:e.target.value})
    } 
     render()
     {
         return (
            <div style={{paddingBottom:10}}>
                <Button type="primary" onClick={this.showModal}>Muşteri Ekle</Button>
                <Modal
                title="Müşteri Ekleme Formu"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>                     
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Şirket Adı"  onChange={this.onChangeSirketAdi}/>                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Adres" onChange={this.onChangeAdres} />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="fork" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Vergi Dairesi"  onChange={this.onChangeVergiDairesi}/>                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="api" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Hesap No"  onChange={this.onChangeHesapNo} />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Telefon"  onChange={this.onChangeTelefon} />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="scan" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Faks" onChange={this.onChangeFaks}/>                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="bank" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Banka Adı" onChange={this.onChangeBankaAdi}/>                
                        </FormItem>
                    </Form>
                </Modal>
          </div>
         )
     }
}
export default CoustomerAdd 