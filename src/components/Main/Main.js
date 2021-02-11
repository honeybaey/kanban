import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListItem from "../ListItem/ListItem";
import ListItemMore from "../ListItemMore/ListItemMore";

import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyLists: [],
    };
  }

  componentDidMount() {
    this.disableButton();
  }

  disableButton = () => {
    const emptyItems = [];

    this.props.dataMock.forEach((item, index) => {
      if (!item.issues.length) {
        emptyItems.push(index + 1);
      }
    });

    this.setState({ emptyLists: emptyItems });

    /* prevArr.length === newArr.length &&
      prevArr.every((elem, index) => elem === newArr[index]); */

    /* const isEqual = (prevArr, newArr) => {
      return (
        prevArr.length === newArr.length &&
        prevArr.every((elem, index) => elem === newArr[index])
      );
    }; */
  };

  render() {
    return (
      <main className="main">
        <Route
          path="/"
          exact
          render={() =>
            this.props.dataMock.map((item, index) => (
              <ListItem
                key={item.id}
                {...item}
                dataMock={this.props.dataMock}
                tasksIdCounter={this.props.tasksIdCounter}
                listIndex={index}
                isBtnDisabled={this.state.emptyLists.includes(index)}
                createTask={this.props.createTask}
                onSelectTask={this.props.onSelectTask}
              />
            ))
          }
        />
        <Route
          path="/backlog"
          render={() => (
            <ListItemMore
              key={this.props.dataMock[0].id}
              {...this.props.dataMock[0]}
              dataMock={this.props.dataMock[0]}
              tasksIdCounter={this.props.tasksIdCounter}
            />
          )}
        />
        <Route
          path="/ready"
          render={() => (
            <ListItemMore
              key={this.props.dataMock[1].id}
              {...this.props.dataMock[1]}
              dataMock={this.props.dataMock[1]}
              tasksIdCounter={this.props.tasksIdCounter}
            />
          )}
        />
        <Route
          path="/inprogress"
          render={() => (
            <ListItemMore
              key={this.props.dataMock[2].id}
              {...this.props.dataMock[2]}
              dataMock={this.props.dataMock[2]}
              tasksIdCounter={this.props.tasksIdCounter}
            />
          )}
        />
        <Route
          path="/finished"
          render={() => (
            <ListItemMore
              key={this.props.dataMock[3].id}
              {...this.props.dataMock[3]}
              dataMock={this.props.dataMock[3]}
              tasksIdCounter={this.props.tasksIdCounter}
            />
          )}
        />
      </main>
    );
  }
}
