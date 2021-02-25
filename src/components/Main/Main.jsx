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
    // console.log("prevState: ", prevState.backlogs);
    // console.log("thisState: ", this.state.backlogs);

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
    const { backlogs } = this.state;
    const { tasksIdCounter, createTask, isApplyBtnShow, removeApplyBtn } = this.props;

    return (
      <main className="main">
        <Route
          path="/"
          exact
          render={() =>
            backlogs.map((item, index) => (
              <Backlog
                key={item.id}
                {...item}
                backlogs={backlogs}
                tasksIdCounter={tasksIdCounter}
                listIndex={index}
                isDisabledBtn={backlogs[index]?.isDisabled}
                createTask={createTask}
                onSelectTask={this.onSelectTask}
                isApplyBtnShow={isApplyBtnShow}
                removeApplyBtn={removeApplyBtn}
              />
            ))
          }
        />
        <Route
          path="/backlog"
          render={() => (
            <BacklogMore
              key={backlogs[0].id}
              {...backlogs[0]}
              backlogs={backlogs[0]}
              tasksIdCounter={tasksIdCounter}
            />
          )}
        />
        <Route
          path="/ready"
          render={() => (
            <BacklogMore
              key={backlogs[1].id}
              {...backlogs[1]}
              backlogs={backlogs[1]}
              tasksIdCounter={tasksIdCounter}
            />
          )}
        />
        <Route
          path="/inprogress"
          render={() => (
            <BacklogMore
              key={backlogs[2].id}
              {...backlogs[2]}
              backlogs={backlogs[2]}
              tasksIdCounter={tasksIdCounter}
            />
          )}
        />
        <Route
          path="/finished"
          render={() => (
            <BacklogMore
              key={backlogs[3].id}
              {...backlogs[3]}
              backlogs={backlogs[3]}
              tasksIdCounter={tasksIdCounter}
            />
          )}
        />
      </main>
    );
  }
}
