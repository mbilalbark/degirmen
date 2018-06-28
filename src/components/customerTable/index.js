import React, {Componenet} from 'react'
import { Popconfirm, Table,Button, Spin } from 'antd'
import axios from 'axios';   
import { SERVERURL } from '../../config/'
class CustomerTable extends React.Component {
   
    constructor(props) {
        super(props);
        this.columns = [{
            key : 1,
            title: 'Şirket Adı',
            dataIndex: 'sirketAdi',
        },{
            key : 2,
            title: 'Adres',
            dataIndex: 'adres',
        },{
            key : 3,
            title: 'Vergi Dairesi',
            dataIndex: 'vergiDairesi',
          },{
            key : 4,
            title: 'Hesap No',
            dataIndex: 'hesapNo',
          },{
            key : 5,
            title: 'Telefon',
            dataIndex: 'telefon',
          },{
            key : 6, 
            title: 'Faks',
            dataIndex: 'faks',
          },{
            key : 7,
            title: 'Banka Adı',
            dataIndex: 'bankaAdi',
          },{
            key : 8,
            title: 'Bakiye',
            dataIndex: 'bakiye',
        }, {
          title: 'operation',
          dataIndex: 'operation',
          render: (text, record) => {
            return (
              this.state.dataSource.length > 0 ?
              (
                <Popconfirm title="Silemek istediğinize eminiz?" okText='Evet' cancelText='Hayır' onConfirm={() => this.onDelete(record.key)}>
                  <Button style={{marginLeft:10}} type="danger" >Sil</Button>
                </Popconfirm>
              ) : null
            );
          },
        }]
        this.state = {
            dataSource: [],
            spiner:false
          };
        }
     
    componentWillMount () {
      axios({
        method: 'post',
        url: `${SERVERURL}degirmen-api/api/customer.php`,
        headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
        data: {
         customerList:"list"
        }
      })
      .then((res) => {
        console.log(res.data.info)
        let list = res.data.info  
        list.forEach(function(element) {
          element.key = element.Id
        });
        this.setState({ dataSource :list, count: this.state.count + 1})
        this.setState({spiner:true})
      })
      .catch(err => console.log(err))
    }

    onDelete = (id) => {
      console.log(id)
      const result = this.state.dataSource.filter(key => key.key!=id);
      this.setState({dataSource:result})
    }
 
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        if(!this.state.spiner){
         return(  <Spin size="large" style={{marginLeft:750}} />)    
        } else {
          return (
            <div>     
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
        }
         
    }
}
export default CustomerTable