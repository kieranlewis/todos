import Task from './Task';

const Project = (title, tasks = []) => {
    const addTask = (task) => tasks.push(task);
    const deleteTask = (index) => {
        tasks.splice(index,1);
    }
    const editTaskTitle = (newTitle, index) => {
        tasks[index].title = newTitle;
    }

    return { title, tasks, addTask, deleteTask, editTaskTitle };
}

export default Project