import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const data = require("./assets/data.json");

export default class App extends Component {
  constructor() {
    super();

    this.tasksIdCounter = this.getLastTaskId(data);

    this.state = {
      data: data,
    };
  }

  componentDidMount() {
    // this.setState({ data });
  }

  createTask = (name, taskIndex) => {
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

  onSelectTask = (listIndex, taskIndex) => {
    const copy = [...this.state.data];

    const prevList = copy[listIndex - 1].issues;
    const selectedList = copy[listIndex].issues;
    const selectedTask = prevList[taskIndex];

    prevList.splice(taskIndex, 1);
    selectedList.push(selectedTask);

    this.setState({ data: copy });
  };

  getLastTaskId = (data) => {
    const ids = [];
    for (let i = 0; i < data.length; i++) {
      data[i].issues.forEach((issue) => ids.push(issue.id));
    }
    return ids.reduce((prev, next) => (next > prev ? next : prev)) + 1;
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Main
            backlogs={this.state.data}
            tasksIdCounter={this.tasksIdCounter}
            createTask={this.createTask}
            onSelectTask={this.onSelectTask}
          />
          <Footer backlogs={this.state.data} />
        </BrowserRouter>
      </div>
    );
  }
}
