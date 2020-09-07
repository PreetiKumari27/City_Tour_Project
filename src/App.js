import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/NavBar";
import TourList from "./components/TourList";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}
export default App;
