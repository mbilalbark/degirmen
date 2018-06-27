import React, {Componenet} from 'react'
import { Popconfirm, Table } from 'antd'
class CustomerTable extends React.Component {
   
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'Şirket Adı',
            dataIndex: 'sirketAdi',
        },{
            title: 'Adres',
            dataIndex: 'adres',
        },{
            title: 'Vergi Dairesi',
            dataIndex: 'vergiDairesi',
          },{
            title: 'Hesap No',
            dataIndex: 'hesapNo',
          },{
            title: 'Telefon',
            dataIndex: 'telefon',
          },{
            title: 'Faks',
            dataIndex: 'faks',
          },{
            title: 'Banka Adı',
            dataIndex: 'bankaAdi',
          },{
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