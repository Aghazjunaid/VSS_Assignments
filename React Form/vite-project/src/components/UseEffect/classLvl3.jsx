import React from "react";
class Level3 extends React.Component {
  state = {
    name: "Ankit",
    city: "Indore",
  };

  componentDidMount() {
    console.log("I'm componentDidMount");
    setTimeout(() => {
      this.setState({ name: "Sanskrati" }, () => {
        //
      });
    }, 3000);
  }

  componentWillUnmount() {
    console.log("Bye bye from L3 V1");
  }

  //nextState have updated state value
  shouldComponentUpdate(nextProps, nextState) {
    console.log({ nextProps, nextState });
    if (nextState.name !== this.state.name) { //will render only when name is changing and in case of city it is not rendering
      return true;
    }
    return false;
  }

  render() {
    console.log("I'm rendering");
    return (
      <>
        <p>
          My name is : {this.state.name} &amp; city is {this.state.city}
        </p>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <input
            type="text"
            value={this.state.city}
            onChange={(e) => {
              this.setState({ city: e.target.value });
            }}
          />
        </div>
      </>
    );
  }
}

export default Level3;
