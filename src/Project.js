const Project = (title, tasks = []) => {
    const addTask = (task) => tasks.push(task);
    const deleteTask = (index) => {
        tasks.splice(index,1);
    }

    return { title, tasks, addTask, deleteTask };
}

export default Project