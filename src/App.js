import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Cocktails from "./components/Cocktails";

class App extends Component {
  state = {
    backgroundColor: "#282c34",
    textColor: "white"
  };

  // X Hardcode a state
  // X Use it in my component
  // X Change the state in the code to test
  // X Component (some button?)
  // X Event listener & handler
  // - Event handler -> change present to true

  changeDisplayMode = (backgroundColor, textColor) => {
    console.log("TESTING");
    this.setState({ backgroundColor: backgroundColor, textColor: textColor });
  };

  toggleDarkLight = () => {
    if (this.state.backgroundColor === "white") {
      this.setState({ backgroundColor: "#282c34", textColor: "white" });
    } else {
      this.setState({ backgroundColor: "white", textColor: "#282c34" });
    }
  };

  render() {
    return (
      <div>
        <div className="App">
          <header
            className="App-header"
            style={{
              backgroundColor: this.state.backgroundColor,
              color: this.state.textColor
            }}
          >
            <Cocktails />
            <button onClick={() => this.changeDisplayMode("white", "#282c34")}>
              LIGHT MODE
            </button>
            <button onClick={() => this.changeDisplayMode("purple", "green")}>
              DISCO MODE
            </button>
            <button onClick={() => this.changeDisplayMode("#282c34", "white")}>
              DARK MODE
            </button>
            <button onClick={this.toggleDarkLight}>TOGGLE</button>
            {/* PASSING PROPS FROM APP TO PROFILE */}
            <Profile name="Rein" designation="teacher" codename="Rhino" />
            <Profile
              name="Vladislav"
              designation="student"
              codename="What is Love?"
            />
            <Profile
              name="Ewa"
              designation="student"
              codename="The first woman"
            />
          </header>
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
