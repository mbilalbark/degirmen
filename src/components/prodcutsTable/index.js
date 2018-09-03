import React, {} from 'react'
import { Popconfirm, Table,Button, Spin } from 'antd'
import axios from 'axios';   
import { SERVERURL } from '../../config/'

class ProductsTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            key : 1,
            title: 'Cinsi',
            dataIndex: 'cinsi',
        },{
            key : 2,
            title: 'Fiyat',
            dataIndex: 'fiyat',
        },{
            key : 3,
            title: 'Kg',
            dataIndex: 'kg',
          },{
            key : 4,
            title: 'Kdv Oranı',
            dataIndex: 'kdv',
          },{
          key : 5,
          title: 'Düzenle',
          dataIndex: 'operation',
          render: (text, record) => {
            return (
              this.state.dataSource.length > 0 ?
              (
                <Popconfirm title="Silmek istediğinize emin misiniz?" okText='Evet' cancelText='Hayır' onConfirm={() => this.onDelete(record.key)}>
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
              url: `${SERVERURL}degirmen-api/api/product.php`,
              headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
              data: {
               productList:"list"
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
            axios({
              method: 'post',
              url: `${SERVERURL}degirmen-api/api/product.php`,
              headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
              data: {
               productDelete:{
                 Id:id
               }
              }
            })
            .then((res) => {
              console.log(res.data.info)
            })
            .catch(err => console.log(err))
          }

     render(){
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

export default ProductsTable