const Task = (title, dueDate, priority) => {
    return { dueDate, priority,
        get title() {
            return title;
        },

        set title(newTitle) {
            title = newTitle
        }
    };
}

export default Task