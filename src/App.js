import "./App.css";
import ProductList from "./Components/ProductList/ProductList-component";
import { NavBar } from "./Components/Navbar/navBar-component";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    products: [
      { title: "React js", price: "$99", id: "1", quantity: "1" },
      { title: " Vue js", price: "$89", id: "2", quantity: "1" },
      { title: "Angular", price: "$79", id: "3", quantity: "1" },
    ],
    // count: 0,
  };

  removeHandler = (id) => {
    // return console.log("clicked", id);
    const filteredProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProduct });
  };

  incrementHandler = (val) => {
    // console.log("val", val);
    // const selectedItem = this.state.products.find((p) => p.id === id);
    // console.log("increment click", id);
    const index = this.state.products.findIndex((item) => item.id === val);
    // console.log(index);

    const product = { ...this.state.products[index] };
    product.quantity++;

    const copyProducts = [...this.state.products];
    copyProducts[index] = product;

    // const copyProducts = [...this.state.products];
    // const selectedItem = copyProducts.find((p) => p.id === id);
    // selectedItem.quantity++;
    // console.log(selectedItem);

    //debugging
    // console.log(this.state.products[0]);
    this.setState({ products: copyProducts });
  };

  changeHandler = (event, id) => {
    // console.log(event.target.value, id);
    const index = this.state.products.findIndex((item) => item.id === id);
    // console.log(index);

    const product = { ...this.state.products[index] };
    product.title = event.target.value;

    const copyItems = [...this.state.products];
    copyItems[index] = product;

    this.setState({ products: copyItems });

    // const copyItems = [...this.state.products];
    // const selectedItems = copyItems.find((p) => p.id === id);
    // selectedItems.title = event.target.value;
    // this.setState({ products: copyItems });
  };

  decrementHandler = (id) => {
    // console.log(id);
    const index = this.state.products.findIndex((item) => item.id === id);
    console.log(index);

    const product = { ...this.state.products[index] };
    if (product.quantity <= 1) {
      const removeProduct = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: removeProduct });
    } else {
      const copyItems = [...this.state.products];
      product.quantity--;
      copyItems[index] = product;
      this.setState = { products: copyItems };
    }
    // const copyProducts = [...this.state.products];
    // const selectedItem = copyProducts.find((p) => p.id === id);

    // if (selectedItem.quantity <= 1) {
    //   const removeProduct = copyProducts.filter((p) => p.id !== id);
    //   this.setState({ products: removeProduct });
    // } else {
    //   selectedItem.quantity--;
    //   // console.log(selectedItem);
    //   this.setState({ products: copyProducts });
    // }
  };

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App.js componentDidUpdate");
    console.log("App.js", prevState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <div className="App">
        {/* debugging */}
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count:{this.state.count}
        </button> */}

        {/* <h1>Shopping App</h1> */}
        <NavBar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onIncrement={this.incrementHandler}
          onChange={this.changeHandler}
          onDecrement={this.decrementHandler}
        />
      </div>
    );
  }
}

export default App;
