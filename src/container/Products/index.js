import React, {Component} from 'react'
import ProductsAdd from '../../components/productAdd'
import ProductList from '../../components/prodcutsTable'

class Product extends React.Component {

    render(){
        return( 
            <div>
                <ProductsAdd/>
                <ProductList/>
           </div>
        )
    }

}
export default Product