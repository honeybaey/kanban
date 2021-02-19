import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const data = require("./assets/data.json");

export default class App extends Component {
  state = {
    data: data,
  };

  componentDidMount() {
    // this.setState({ data });
  }

  createTask = () => {
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

  getLastTaskId = (data) => {
    const ids = [];
    for (let i = 0; i < data.length; i++) {
      data[i].issues.forEach((issue) => ids.push(issue.id));
    }
    return ids.reduce((prev, next) => (next > prev ? next : prev)) + 1;
  };

  tasksIdCounter = this.getLastTaskId(data);

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Main
            backlogs={this.state.data}
            tasksIdCounter={this.tasksIdCounter}
            createTask={this.createTask}
          />
          <Footer backlogs={this.state.data} />
        </BrowserRouter>
      </div>
    );
  }
}
