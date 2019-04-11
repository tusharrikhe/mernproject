import React from "react";
import axios from "axios";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  }
  baseURL = "http://localhost:4000/api/";

  id;

  componentDidMount() {
    this.id = localStorage.getItem("id");
    console.log(this.id);
    axios.get(this.baseURL + "product/" + this.id).then(response => {
      this.setState({
        name: response.data.name,
        price: response.data.price
      });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const updatedProduct = {
      name: this.state.name,
      price: this.state.price
    };
    this.setState({
      name: "",
      price: "",
      id: ""
    });
    axios.put(this.baseURL + "product/" + this.id, updatedProduct).then(response => {
      alert("Product successfully updated");
      return this.props.history.push("/get");
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
      <div className="container">
        <h1 className="text-center">Update Product</h1>
        <form
          onSubmit={this.handleSubmit}
          className="form-group offset-lg-4 col-lg-4"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            className="form-control"
            value={this.state.price}
            onChange={this.handleChangePrice}
          />
          <br />
          <input
            type="submit"
            className="form-control btn btn-info"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default Update;
