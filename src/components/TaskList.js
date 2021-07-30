import { Grid } from "@material-ui/core";
import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <div className="task-list">
      <Grid>
      <div className="task-list-title" style={{padding: "1rem"}}>
        <strong>{props.status}</strong>
      </div>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} onStatusChange={props.onStatusChange} />
      ))}
      </Grid>
    </div>
  );
};

export default TaskList;
