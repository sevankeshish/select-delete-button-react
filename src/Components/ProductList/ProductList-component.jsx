import { Component } from "react";
import { Product } from "../Product/Product-component";
import "./ProductList-style.scss";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: "React js", price: "$99", id: "1", quantity: "1" },
        { title: "Vue js", price: "$89", id: "2", quantity: "1" },
        { title: "Angular js", price: "$79", id: "3", quantity: "1" },
      ],
    };
  }
  removeHandler = (id) => {
    // return console.log("clicked", id);
    const filteredProduct = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: filteredProduct });
  };

  render() {
    return (
      <div class="ProductList-style">
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            // name={product.title}
            // price={product.price}
            // quantity = {product.quantity}
            product={product}
            onDelete={() => this.removeHandler(product.id)}
          />
        ))}
      </div>
    );
  }
}
