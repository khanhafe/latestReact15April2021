import React from "react";
import ReactDOM from "react-dom";
import Comment from "./comment";

//const App = () => <div>hello world</div>;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hafeez"
    };
  }
  render() {
    return (
      <div>
        {this.state.name} <Comment />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
