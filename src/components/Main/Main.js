import React, { PureComponent } from "react";
import { Route } from "react-router-dom";
import Backlog from "../Backlog/Backlog";
import BacklogMore from "../BacklogMore/BacklogMore";

import "./Main.css";

import isEqual from "lodash/isEqual";

export default class Main extends PureComponent {
  state = {
    backlogs: [],
    lastChangedBacklogIndex: null,
  };

  componentDidMount() {
    this.enhancedData(this.props.backlogs);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState: ", prevState.backlogs);
    console.log("thisState: ", this.state.backlogs);

    if (
      !isEqual(
        prevState.backlogs[prevState.lastChangedBacklogIndex]?.issues,
        this.state.backlogs[this.state.lastChangedBacklogIndex]?.issues
      )
    ) {
      this.enhancedData(this.state.backlogs);
    }
  }

  enhancedData = (lists) => {
    const data = [lists[0]];

    for (let i = 1; i < lists.length; i++) {
      data.push({
        ...lists[i],
        isDisabled: !lists[i - 1].issues.length,
      });
    }

    this.setState({ backlogs: data });
  };

  onSelectTask = (listIndex, taskIndex) => {
    const prevList = this.state.backlogs[listIndex - 1].issues;
    const selectedList = this.state.backlogs[listIndex].issues;
    const selectedTask = prevList[taskIndex];

    prevList.splice(taskIndex, 1);
    selectedList.push(selectedTask);

    const changed = this.state.backlogs.map((item, i) => {
      if (i === listIndex) {
        return {
          ...item,
          issues: selectedList,
        };
      }

      if (i === listIndex - 1) {
        return {
          ...item,
          issues: prevList,
        };
      }

      return item;
    });

    this.setState({ backlogs: changed, lastChangedBacklogIndex: listIndex });
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
                onSelectTask={this.onSelectTask}
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
