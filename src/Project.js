import { parse, isValid, format } from 'date-fns';
import { enGB } from 'date-fns/locale';

const Project = (title, tasks = []) => {
    const addTask = (task) => tasks.push(task);
    const deleteTask = (index) => {
        tasks.splice(index,1);
    }
    const editTaskTitle = (newTitle, index) => {
        tasks[index].title = newTitle;
    }
    const editTaskDate = (newDate, index) => {
        tasks[index].dueDate = newDate;
    }

    return { title, tasks, addTask, deleteTask, editTaskTitle, editTaskDate };
}

export default Project