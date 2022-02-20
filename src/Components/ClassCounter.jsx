import { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  changeHandler = (text) => {
    this.setState({ name: text.target.value });
  };

  componentDidMount() {
    document.title = `clicked : ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("document title updating");
      document.title = `clicked : ${this.state.count} time`;
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.add()}>count : {this.state.count}</button>
        <input
          typr="text"
          value={this.state.name}
          onChange={(text) => this.changeHandler(text)}
        ></input>
      </div>
    );
  }
}
