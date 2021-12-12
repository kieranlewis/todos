import { format } from "date-fns";

const Task = (title, dueDate, priority) => {
    return {
        get title() {
            return title;
        },

        set title(newTitle) {
            title = newTitle
        },

        get dueDate() {
            return dueDate;
        }, 

        set dueDate(newDate) {
            dueDate = newDate;
        },
        
        get priority() {
            return priority;
        },

        set priority(newPriority) {
            priority = newPriority;
        }
    };
}

export default Task