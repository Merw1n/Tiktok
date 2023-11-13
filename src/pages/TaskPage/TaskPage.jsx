import CriteriaInput from "../../components/CriteriaInput/CriteriaInput";
import RunBtn from "../../components/RunBtn/RunBtn";
import TaskInput from "../../components/TaskInput/TaskInput";
import "./TaskPage.scss"

const TaskPage = () => {
    return (
        <div className="taskpage__container">
            <TaskInput />
            <CriteriaInput />
            <RunBtn />
        </div>
    )
}

export default TaskPage;