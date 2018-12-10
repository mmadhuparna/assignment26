import React, { Component } from 'react';
import './App.css';
import AddProduct from './AddProduct.js';
import ProductItem from './ProductItem.js';
import ErrorBoundary from './ErrorBoundary'
const products = [];

localStorage.setItem('products' ,JSON.stringify(products));
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products:JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  componentWillMount(){
    const products=this.getProducts();
    this.setState({products});
  }

  //Get prooduct from product list
  getProducts() {
    return this.state.products;
  }

  //Add product to product list
  onAdd(name,desc,price,status) {
    const products= this.getProducts();
    products.unshift({
      name,
      desc,
      price,
      status
    });
    this.setState({products});
  }

  //Delete product from list
  onDelete(name){
    const products= this.getProducts();
    const newProducts = products.filter(product=>
      {return product.name != name;}
    );
    this.setState({products:newProducts});
  }

  render() {
    //Render table on when product exist
    let list;
    if (this.state.products.length > 0) {
      list = 
          <table className="col-md-12">
         <h3>Product List</h3>
         <tbody>
          
            {
              this.state.products.map(product => {
                return (
                  <ErrorBoundary>

                    <ProductItem key={product.name} {...product} onDelete={this.onDelete}>
                    </ProductItem>

                  </ErrorBoundary>
                );
              })
            }
           
            </tbody>
           </table>
          
         
      
    }
    return (
    <div className="container">
    <AddProduct onAdd={this.onAdd}></AddProduct>
    <hr/>
     <div className="displayProducts">
      
      <div> {list} </div>
      </div>
    </div>
    );
  }
}

export default App;