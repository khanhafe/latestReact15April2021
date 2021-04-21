import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Formsubmit from "./Formsubmit";
//const App = () => <div>hello world</div>;

class App extends React.Component {
  appForm = (param) => {
    console.log(param);
  };
  render() {
    return (
      <div>
        <SeasonDisplay />
        <Formsubmit onSubmit={this.appForm} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
