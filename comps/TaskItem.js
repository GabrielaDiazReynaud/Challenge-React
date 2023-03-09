import axios from "axios";
const TaskItem = ( {taskI, tasksList ,setTaskList}) => {
    const updateSelected= ()=>{
        let tmp= false;
        if(taskI.selected ==false){
            tmp= true;
        }
        axios.put(`https://us-central1-challenge-app-eb721.cloudfunctions.net/helloWorld/updateTaskSelected/${taskI.id}`, {
        selected: tmp
        }).then((response) => {});
        let tmpObj={
            id:taskI.id,
            task:taskI.task,
            selected: tmp
        }
        const taskActualizados = tasksList.map((taskState) => {
            if (taskState.id === taskI.id) {
              return tmpObj;
            } else {
              return taskState;
            }
          });
          setTaskList(taskActualizados);
    }


    return ( 
        <div className="item m-2 px-5 py-5 d-flex overflow-hidden">
        <input type="checkbox" checked={taskI.selected===true} onChange={updateSelected} />
        <span className={`${taskI.selected===true ?"done" :"textStyle"}`}>{taskI.task}</span>
           </div>

     );
}

export default TaskItem;