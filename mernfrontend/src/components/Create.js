import React from "react";
import axios from "axios";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  }
  baseURL = "http://localhost:4000/api/add";

  handleSubmit = event => {
    event.preventDefault();
    const newProduct = {
      name: this.state.name,
      price: this.state.price
    };
    axios
      .post(this.baseURL, newProduct)
      .then(response => {
          alert("Product successfully added" + response)
      this.props.history.push('/get')});


    this.setState({
      name: "",
      price: ""
    });
  };

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangePrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Add New Product</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <label>Price</label>
          <input
            type="text"
            value={this.state.price}
            onChange={this.handleChangePrice}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
