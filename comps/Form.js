import { useState } from "react";

const Form = ({tasksList,setTaskList}) => {
    const [taskInput, setTaskInput]=useState("");
    const addTask = async()=>{
        const res= await fetch('https://us-central1-challenge-app-eb721.cloudfunctions.net/helloWorld/addTask', {
            method: 'POST',
            body: JSON.stringify({
              task : taskInput
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
         const data = await res.json();
           
         console.log(data);
    
         setTaskList(...tasksList, data[0]);
    }
    const deleteSelectedTasks=async()=>{
        const res= await fetch('https://us-central1-challenge-app-eb721.cloudfunctions.net/helloWorld/deleteSelectedTasks',
        {method:'DELETE'});
        const data = await res.json();
        const updateTasksList = tasksList.filter((taskState) => {
            if (taskState.selected === false) {
              return pacienteState;
            }
          });
        setTaskList(updateTasksList);
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
            <button onClick={deleteSelectedTasks}className="btn btn-primary">Eliminar Tareas Terminadas</button>
            <button className="btn btn-dark">Eliminar Todas Las Tareas</button>
        </div>
    </div>

    );
}
 
export default Form;