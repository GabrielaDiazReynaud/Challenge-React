import TaskItem from "./TaskItem";
const  TaskListing = ({tasksList ,setTaskList}) => {
    return ( 
        <div className="scrollContainer">
        <div >
            {tasksList.map((taskState) => (
            <TaskItem
              key={taskState.id}
              taskI={taskState}
              tasksList={tasksList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
    </div>
     );
}
 
export default  TaskListing;