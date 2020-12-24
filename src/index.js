import React, { Component } from "react";
import ReactDOM from "react-dom";
import MoviePage from "./context/MoviePage";

class App extends Component {
  state = { currentUser: { name: "Mosh" } };
  render() {
    return (
      <div>
        <MoviePage />
      </div>
    );
  }
}

export default App;
const element = <h1>Hello Element</h1>;
//console.log(element);
ReactDOM.render(<App />, document.getElementById("root"));
