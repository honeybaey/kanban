import React, { Component } from "react";
import { Route } from "react-router-dom";
import Backlog from "../Backlog/Backlog";
import BacklogMore from "../BacklogMore/BacklogMore";

import "./Main.css";

let _ = require("lodash/core");

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backlogs: [],
    };
  }

  componentDidMount() {
    this.enhancedData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.backlogs.every(
        (elem, index) => elem === this.state.backlogs[index]
      )
    ) {
      this.enhancedData();
    }
  }

  enhancedData = () => {
    const { backlogs } = this.props;

    const data = [backlogs[0]];

    for (let i = 1; i < backlogs.length; i++) {
      data.push({
        ...backlogs[i],
        isDisabled: !backlogs[i - 1].issues.length,
      });
    }

    this.setState({ backlogs: data });
  };

  render() {
    return (
      <main className="main">
        <Route
          path="/"
          exact
          render={() =>
            this.state.backlogs.map((item, index) => (
              <Backlog
                key={item.id}
                {...item}
                backlogs={this.state.backlogs}
                tasksIdCounter={this.props.tasksIdCounter}
                listIndex={index}
                isDisabledBtn={this.state.backlogs[index]?.isDisabled}
                createTask={this.props.createTask}
                onSelectTask={this.props.onSelectTask}
              />
            ))
          }
        />
        <Route
          path="/backlog"
          render={() => (
            <BacklogMore
              key={this.state.backlogs[0].id}
              {...this.state.backlogs[0]}
              backlogs={this.state.backlogs[0]}
              tasksIdCounter={this.props.tasksIdCounter}
            />
          )}
        />
        <Route
          path="/ready"
          render={() => (
            <BacklogMore
              key={this.state.backlogs[1].id}
              {...this.state.backlogs[1]}
              backlogs={this.state.backlogs[1]}
              tasksIdCounter={this.props.tasksIdCounter}
            />
          )}
        />
        <Route
          path="/inprogress"
          render={() => (
            <BacklogMore
              key={this.state.backlogs[2].id}
              {...this.state.backlogs[2]}
              backlogs={this.state.backlogs[2]}
              tasksIdCounter={this.props.tasksIdCounter}
            />
          )}
        />
        <Route
          path="/finished"
          render={() => (
            <BacklogMore
              key={this.state.backlogs[3].id}
              {...this.state.backlogs[3]}
              backlogs={this.state.backlogs[3]}
              tasksIdCounter={this.props.tasksIdCounter}
            />
          )}
        />
      </main>
    );
  }
}
