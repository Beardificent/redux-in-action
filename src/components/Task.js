import { Grid, Paper } from "@material-ui/core";
import React from "react";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const Task = (props) => {
  return (
    <Grid container>
      <Paper
        style={{
          width: "20%",
          padding: "1rem",
          margin: "1rem",
          backgroundColor: "green",
        }}
        className="task"
      >
        <select value={props.task.status} onChange={onStatusChange}>
          {TASK_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}{" "}
            </option>
          ))}
        </select>
        <div className="task-header">
          <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
            <label
              style={{
                fontWeight: "bold",
                margin: "0 0.625rem 0 0",
                color: "white",
              }}
            >
              title:
            </label>
            <div> {props.task.title}</div>
          </Grid>
        </div>
        <Grid container>
          <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
            <label
              style={{
                fontWeight: "bold",
                margin: "0 0.625rem 0 0",
                color: "white",
              }}
            >
              content:{" "}
            </label>
            <div className="task-body">{props.task.description}</div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }
};

export default Task;
