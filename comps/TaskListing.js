import TaskItem from "./TaskItem";
const  TaskListing = ({tasksList ,setTaskList}) => {
    return ( 
        <div className="scrollContainer">
        <div >
            {tasksList.map((taskState) => (
            <TaskItem
              key={taskState.id}
              task={taskState.task}
              selected={taskState.selected}
            />
          ))}
        </div>
    </div>
     );
}
 
export default  TaskListing;