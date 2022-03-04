import { Component, createRef } from "react";

export default class ClassRef extends Component {
  constructor() {
    super();
    this.state = {};
    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
