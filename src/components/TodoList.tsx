import React, { Component } from "react";
import { RootState } from "../store/index";
import { removeTaskFromList, addTaskToList } from "../store/todo/action";
import { Task } from "../store/todo/types";
import { Grid, Form, Input, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

export interface ITodoListProps {
  removeTaskFromList: typeof removeTaskFromList;
  addTaskToList: typeof addTaskToList;
  todoList: Task[];
}

export class TodoList extends Component<ITodoListProps> {
  //generate randon ID for taskID
  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.todoList.length;
    return randomNumber;
  };

  //for adding new todo task into the whole Todo list
  addTask = (event: any) => {
    event.preventDefault();
    // Handle retrieval of form field value.
    const formField: HTMLInputElement | null = document.querySelector(
      '[name="todolist-input"]'
    );
    let formFieldValue: string = "";
    if (formField !== null) formFieldValue = formField.value;

    // Add new task into whole list.
    this.props.addTaskToList({
      id: this.generateID(),
      taskDetail: formFieldValue,
    });
  };

  //delete task with id arguments
  deleteTask = (id: number) => {
    this.props.removeTaskFromList(id);
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Form onSubmit={this.addTask}>
            <Form.Field>
              <label htmlFor="todolist-input">Enter new Task into List</label>
              <Input name="todolist-input" type="text" />
            </Form.Field>
            <Input type="submit" value="Add" />
          </Form>
        </Grid.Row>
        <h3>To-Do List</h3>
        <Grid.Row>
          <ul>
            {this.props.todoList.map((element) => (
              <li>
                {element.taskDetail}
                <Button 
                  size="mini"
                  color="red"
                  onClick={(event) => this.deleteTask(element.id)}
                >X
                </Button>
              </li>
            ))}
          </ul>
        </Grid.Row>
      </Grid>
    );
  }
}

//Retrieve "todo list" from our "global" redux state.
const mapStateToProps = (state: RootState) => {
    return {
      todoList: state.todo.taskList, //this is taskList fromreducer.ts
    };
};

//connect Redux and React using our values and view!!
export default connect(mapStateToProps, {
    addTaskToList,
    removeTaskFromList,
})(TodoList);