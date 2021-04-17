import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

//const App = () => <div>hello world</div>;

class App extends React.Component {
  render() {
    return (
      <div>
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
