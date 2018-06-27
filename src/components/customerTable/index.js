import React, {Componenet} from 'react'
import { Popconfirm, Table } from 'antd'
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
              this.state.dataSource.length > 1 ?
              (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                  <a href="javascript:;">Delete</a>
                </Popconfirm>
              ) : null
            );
          },
        }]
        this.state = {
            dataSource: [],
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
        console.log(res)
      })
      .catch(err => console.log(err))
    }

    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>     
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}
export default CustomerTable