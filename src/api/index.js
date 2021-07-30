import axios from "axios";

const API_BASE_URL = "http://localhost:3001";
//Defines a constant for the API's BASE URL


const client = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  //content-type is required by json-server for PUT requests
});

export function createTask(params){
    //a POST request is required to add or update data on the serve
    return client.post('/tasks', params);
}

export function fetchTasks() {
  //exports the fetchTasks function that will make the GET call
  return client.get("/tasks");
}

export function editTasks(id, params){
    return axios.put(`${API_BASE_URL}/tasks/${id}`, params);
}
