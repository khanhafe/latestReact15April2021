import React from "react";
import ReactDOM from "react-dom";

//const App = () => <div>hello world</div>;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hafeez"
    };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
