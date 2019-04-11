import React from "react";
import axios from "axios";

class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  baseURL = "http://localhost:4000/api/";

  getProducts = () => {
    axios.get(this.baseURL).then(response => {
      this.setState({ products: response.data });
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  handleDelete = id => {
    axios
      .delete(this.baseURL + "/product/" + id)
      .then(response => {
        this.getProducts();
      })
      .catch(err => {
        console.log(err);
      });
  };

  redirectProduct = id => {
      localStorage.setItem('id',id);
    this.props.history.push("./update");
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Products</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Product ID</td>
              <td>Product Name</td>
              <td>Product Price</td>
              <td>Action Delete</td>
              <td>Action Update</td>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product, i) => {
              return (
                <tr key={product._id}>
                  <td>{i + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(product._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.redirectProduct(product._id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Get;
