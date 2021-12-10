const Project = (title, tasks = []) => {
    const addTask = (task) => tasks.push(task);

    return { title, tasks, addTask };
}

export default Project