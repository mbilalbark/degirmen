import React,{Component} from 'react'
import { Modal, Button, Form, Input, Icon } from 'antd'
const FormItem = Form.Item;
class CoustomerAdd extends React.Component {

    state = { visible: false }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
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
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Şirket Adı" />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Adres" />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="fork" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Vergi Numarası" />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="api" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Hesap No" />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Telefon" />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="scan" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Faks" />                
                        </FormItem>
                        <FormItem>                     
                            <Input prefix={<Icon type="bank" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Banka Adı" />                
                        </FormItem>
                    </Form>
                </Modal>
          </div>
         )
     }
}
export default CoustomerAdd 