import { Component } from "react";
import { Product } from "../Product/Product-component";
import "./ProductList-style.scss";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: "React js", price: "$99", id: "1" },
        { title: "Vue js", price: "$89", id: "2" },
        { title: "Angular js", price: "$79", id: "3" },
      ],
    };
  }
  render() {
    return (
      <div class="ProductList-style">
        {this.state.products.map((e) => (
          <Product key={e.id} name={e.title} price={e.price} />
        ))}
      </div>
    );
  }
}
