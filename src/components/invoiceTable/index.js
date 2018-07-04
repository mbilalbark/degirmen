import React, { Component } from 'react';
import { Table, Popconfirm,Button } from 'antd';

class InvoiceTable extends Component {

  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Ürün Adı',
      dataIndex: 'cinsi',
      width: '30%',
    }, {
      title: 'Adet/Miktar',
      dataIndex: 'miktar',
    }, {
      title: 'Kilo',
      dataIndex: 'kg',
    }, {
      title: 'Fiyat',
      dataIndex: 'fiyat',
    },{
      title: 'Kdv',
      dataIndex: 'kdv',
    },{
      title: 'Toplam Fiyat',
      dataIndex: 'toplam',
    },{
      title: 'Düzenle',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.props.product.length > 0 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm={(e) => this.props.sil(record.key)}>
              <Button style={{marginLeft:10}} type="danger" >Sil</Button>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        productName: 'Kırmızı un',
        piece: '3',
        kilo:  '50',
        price: '50',
        totalPrice: '150'
      }, {
        key: '1',
        productName: 'Mavi un',
        piece: '4',
        kilo:  '50',
        price: '60',
        totalPrice: '240'
      }],
    };
  }



    render() {
    const { dataSource } = this.props.product;
    const columns = this.columns;
    return (    
      <div>
        <Table size={'small'} dataSource={ this.props.product } columns={ columns } />
      </div>
    );
  }
}

export default InvoiceTable;