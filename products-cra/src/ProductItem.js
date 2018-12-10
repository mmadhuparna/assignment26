import React, { Component,Fragment } from 'react';
import './App.css';

//Product  class
class Product extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete() {
    const {onDelete, name} = this.props;
    onDelete(name);
  }
  render() {
    const {name, desc,price,status,onDelete} = this.props;
    let stat;
    if(status =="yes"){
        stat = "Available";
       } 
       else{
         stat = "Not Available";
       }
    return(
//using Fragments
      <Fragment>
      <tr className="row" > 
      <td className="col-md-3">{name}</td>
      <td className="col-md-4">{desc}</td>
      <td className="col-md-2">Rs {price}</td>
      <td className="col-md-2">{stat}</td>
      <td className="btn btn-danger" onClick={this.onDelete}>X</td>
      </tr>
      </Fragment>
      
    )
  }
}




export default Product;