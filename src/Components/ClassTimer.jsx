import { Component } from "react";

export default class ClassTimer extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.myTimer = setInterval(() => {
      console.log("Component Did Mount");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("CWUM");
    clearInterval(this.myTimer);
  }

  render() {
    return (
      <div>
        <p>class interval</p>
      </div>
    );
  }
}
