import { useState } from "react";
import axios from "axios";
const Form = ({tasksList,setTaskList}) => {
    const [taskInput, setTaskInput]=useState("");
    const addTask = ()=>{
        if(taskInput!==""){
          axios.post(`https://us-central1-challenge-app-eb721.cloudfunctions.net/helloWorld/addTask`, {
            task : taskInput
          }).then((response) => {
            setTaskList([...tasksList,response.data[0]]);
          });
        }
        setTaskInput("");
    }
    const deleteSelectedTasks=()=>{
          axios.delete(`https://us-central1-challenge-app-eb721.cloudfunctions.net/helloWorld/deleteSelectedTasks`).then((response) => {
           
          });
          const updateTasksList = tasksList.filter((taskState) => {
            if (taskState.selected === false) {
              return taskState;
            }
          });
          setTaskList(updateTasksList);
       
    }
    const deleteAllTasks=()=>{
        axios.delete(`https://us-central1-challenge-app-eb721.cloudfunctions.net/helloWorld/deleteAllTasks`).then((response) => {
           
        });
        setTaskList([]);
    }
    return (  
        <div>
        <div className="mb-3 d-flex flex-wrap justify-content-center align-items-center">
            <label  className="form-label" htmlFor="taskinput">Tarea</label>
            <input
                className="m-2 p-1"
                type="text"
                id="taskinput"
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={addTask} className="btn btn-success">Agregar</button>
        </div>

        <div className="d-grid gap-2 " >
            <button onClick={deleteSelectedTasks} className="btn btn-primary">Eliminar Tareas Terminadas</button>
            <button onClick={deleteAllTasks} className="btn btn-dark">Eliminar Todas Las Tareas</button>
        </div>
    </div>

    );
}
 
export default Form;