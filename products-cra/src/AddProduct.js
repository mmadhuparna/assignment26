import React, { Component } from 'react';
import './App.css';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pname:"",
      pdesc:"",
      pprice:0,
      status: "yes"
    };

    //Binding events
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  //Handle form submit event
  onSubmit(event) {
    event.preventDefault();
    const convertedStatus= this.state.status;
    this.props.onAdd(this.state.pname,this.state.pdesc,this.state.pprice,this.state.status);
  }

  //handle checkbox change event
  onChangeStatus(event){
    const newState=!this.state.status;
    this.setState({
      status: newState
    });
  }
  render() {
    //conditional styling for availability option
    var bgStyle = {
      paddingLeft:8,
      paddingRight:8,
      backgroundColor : this.state.status === "yes"?  'green' : 'red'
    };
    return(
      <div className="row">
      <div className="col-md-5">
      <h3 className="page-header">Product</h3>
      <hr/>
        <form className= "form-group" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" ref={pname => this.pname = pname}  onChange={(e) => this.setState({ pname: e.target.value })}    required/>
          </div>
          <div className="form-group">
          <label>Description</label>
          <textarea  className="form-control" ref={pdesc => this.pdesc = pdesc} onChange={(e) => this.setState({ pdesc: e.target.value })}  required/>
          </div>
          <div className="form-group">
          <label>Price</label>
          <input type="number" className="form-control" ref={pprice => this.pprice = pprice} onChange={(e) => this.setState({ pprice: e.target.value })}  required/>
          </div>
          <div className="form-group">
          <label>Available?</label>
          
          <select className="form-control"  ref={status => this.status = status} onChange={(e) => this.setState({ status: e.target.value })}  required >
              <option  value="yes">Yes</option>
              <option  value="no">No</option>
              </select>
              </div>
          <div className="form-group">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="reset" className="btn btn-link">cancel</button>
          </div>
        </form>
        </div>
        
      {/* product visible on right side while user typing */}
        <div className="col-md-5 offset-md-1"> 
        <div className="styl">
          <p className="blue form-control"> {this.state.pname} </p>
           <p className="purple "> {this.state.pdesc}</p>
          <hr/>
          <div className="statusGroup">
          <span className="status">Availability? </span>
          <span style ={bgStyle}>{this.state.status}</span>
          </div>
          <hr/>
          <p className="price ">Price: Rs {this.state.pprice} </p>
          
        </div>
      </div>
       </div>
    )
  }
}

export default AddProduct;