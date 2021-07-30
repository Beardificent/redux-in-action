import { Box, Button, Grid } from "@material-ui/core";
import React, { Component } from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      title: "",
      description: "",
    };
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  resetForm() {
    this.setState({ showNewCardForm: false, title: "", description: "" });
  }

  onCreateTask = (e) => {
    e.preventDefault();
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description,
    });
    this.resetForm();
  };

  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm });
  };
  renderTaskLists() {
    const { tasks } = this.props;
    return TASK_STATUSES.map((status) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <TaskList
          key={status}
          status={status}
          tasks={statusTasks}
          onStatusChange={this.props.onStatusChange}
        />
      );
    });
  }

  render() {
    if (this.props.isLoading) {
      return <div className={"tasks-loading"}>Loading...</div>;
    }
    return (
      <div className="task-list">
        <Grid>
          <div className="task-list-header">
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <h1>Tasks</h1>
              <Button
                variant="contained"
                color="primary"
                className="button button-default"
                onClick={this.toggleForm}
              >
                + new task
              </Button>
            </Grid>
          </div>
        </Grid>
        {this.state.showNewCardForm && (
          <form className="task-list-form" style={{display: 'flex', justifyContent: "center"}} onSubmit={this.onCreateTask}>
            <input
              className="full-width-input"
              onChange={this.onTitleChange}
              value={this.state.title}
              type="text"
              placeholder="title"
            />
            <Box pr={5} pl={5}></Box>
            <input
              className="full-width-input"
              onChange={this.onDescriptionChange}
              value={this.state.description}
              type="text"
              placeholder="description"
            />
            <Button className="button" type="submit">
              Save
            </Button>
          </form>
        )}

        <div className="task-lists">{this.renderTaskLists()}</div>
      </div>
    );
  }
}

export default TasksPage;
