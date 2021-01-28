import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const data = require("./assets/data.json");

export default class App extends Component {
  constructor() {
    super();

    this.tasksIdCounter = 16;

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data });
  }

  createTask = (name) => {
    const newTask = {
      id: this.tasksIdCounter++,
      name: "",
    };

    const newData = [...this.state.data];
    newData[0].issues.push(newTask);

    this.setState({
      data: newData,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Main
            dataMock={this.state.data}
            tasksIdCounter={this.tasksIdCounter}
            createTask={this.createTask}
          />
          <Footer dataMock={this.state.data} />
        </BrowserRouter>
      </div>
    );
  }
}
