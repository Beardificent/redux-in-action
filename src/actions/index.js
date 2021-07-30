import * as api from "../api";

let _id = 1;

export function uniqueId() {
  return _id++;
}

function createTaskSucceeded(task) {
  return { type: "CREATE_TASK_SUCCEEDED", payload: { task } };
}

/* export function createTask({ title, description }) {
  return {
    type: "CREATE_TASK",
    payload: { title, description, status: "Unstarted" },
  };
} */

export function createTask({ title, description, status = "Unstarted" }) {
  return (dispatch) => {
    api.createTask({ title, description, status }).then((response) => {
      dispatch(createTaskSucceeded(response.data));
    });
  };
}

function fetchTasksStarted() {
  return {
    type: "FETCH_TASKS_STARTED",
  };
}
export function fetchTasksSucceeded(tasks) {
  return { type: "FETCH_TASKS_SUCCEEDED", payload: { tasks } };
}

export function fetchTasksFailed(error) {
  return { type: "FETCH_TASKS_FAILED", payload: { error } };
}

export function fetchTasks() {
  return (dispatch) => {
    dispatch(fetchTasksStarted());

    api
      .fetchTasks()
      .then((response) => {
        setTimeout(() => {
        dispatch(fetchTasksSucceeded(response.data));
        }, 1000);
       // throw new Error("Unable to fetch tasks");
      })
      .catch((error) => {
        dispatch(fetchTasksFailed(error.message));
      });
  };
}

export function editTaskSucceeded(task) {
  return { type: "EDIT_TASK_SUCCEEDED", payload: { task } };
}

export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    const task = getTaskById(getState().tasks.tasks, id);
    const updatedTask = Object.assign({}, task, params);

    api.editTasks(id, updatedTask).then((response) => {
      dispatch(editTaskSucceeded(response.data));
    });
  };
}
function getTaskById(tasks, id) {
  return tasks.find((task) => task.id === id);
}
