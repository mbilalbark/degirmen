import React, {Component} from 'react'
import CustomerTable from '../../components/customerTable';
import CustomerAdd from '../../components/customerAdd';
class Customers extends React.Component {

    render (){
        return (
        <div> 
          <CustomerAdd/>
          <CustomerTable/>
        </div>
     )
    }
}
export default Customers