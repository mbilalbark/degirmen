import React, { Component } from 'react';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';

class ProductTable extends Component {

  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Ürün Adı',
      dataIndex: 'productName',
      width: '30%',
    }, {
      title: 'Adet/Miktar',
      dataIndex: 'piece',
    }, {
      title: 'Kilo',
      dataIndex: 'kilo',
    }, {
      title: 'Fiyat',
      dataIndex: 'price',
    },{
      title: 'Toplam Fiyat',
      dataIndex: 'totalPrice',
    },{
      title: 'Düzenle',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
              <a href="javascript:;">Sil</a>
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
      const { dataSource } = this.state;
    const columns = this.columns;
    return (    
      <div>
        <Table size={'small'} dataSource={ dataSource } columns={ columns } />
      </div>
    );
  }
}

export default ProductTable;