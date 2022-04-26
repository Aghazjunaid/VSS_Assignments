import { Component } from "react";

class LifecycleV1 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Deepshikha", counter: 0, comments: [] };
    console.log("1- Inside Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2- Inside getDerivedStateFromProps: ", props, state);

    return {};
  }

  _handleIncrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount() {
    console.log("4- I am component did mount");
  }

  shouldComponentUpdate(props, state) { //we can call this optionally whenever needed
    console.log(props, state);
    if (state.counter % 2 === 0) {
      return false;
    }
    return true;
  }

  componentWillUnmount() { //when user move to another components then it is called
    console.log("I am inside component will unmount");
    alert("I am closing");
  }

  render() {
    console.log("3- Inside Render"); //log each time when rendering
    return (
      <>
        <p>I'm a LifecycleV1 Comp {this.state.counter}</p>
        <button onClick={this._handleIncrementCounter}>Increase Counter</button>

        {this.state.comments.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default LifecycleV1;
