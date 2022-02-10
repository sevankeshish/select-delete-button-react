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
    const filteredProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProduct });
  };

  incrementHandler = (id) => {
    // const selectedItem = this.state.products.find((p) => p.id === id);
    // console.log("increment click", id);
    const copyProducts = [...this.state.products];
    const selectedItem = copyProducts.find((p) => p.id === id);
    selectedItem.quantity++;
    // console.log(selectedItem);
    this.setState({ producs: copyProducts });
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
            items={product}
            onDelete={() => this.removeHandler(product.id)}
            onIncrement={() => this.incrementHandler(product.id)}
          />
        ))}
      </div>
    );
  }
}

// if (dataid.includes(id)) {
//     for (let i = 0; i <= dataid.length; i++) {
//       if (dataid[i] === id) {
//         dataid.splice(i, 1);
//         setdataid([...dataid]);
//       }
//     }
//   } else {
//     setdataid([...dataid, id]);
//   }
