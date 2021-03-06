import Project from './Project';
import ProjectList from './ProjectList';
import Task from './Task';
import { format } from 'date-fns';

const projectForm = document.querySelector('#form-container');
const taskForm = document.querySelector('#task-container');
const addProjectButton = document.querySelector('#add-project-btn');
const span = document.querySelector('.close');
const taskSpan = document.querySelector('.task-close');
const submitButton = document.querySelector('#submit-btn');
const submitTaskButton = document.querySelector('#submit-task-btn');
const container = document.querySelector('.container');

//Dummy Project
const today = Project('Today');
const project1 = Project('Create To Do List');
const project2 = Project('Pickup shopping');
const projectList = ProjectList([today, project1, project2]);
const task1 = Task('Fill Car', format(new Date(), 'dd-MM-yyyy'), 3);
const task2 = Task('Drive to supermarket', format(new Date(), 'dd-MM-yyyy'), 1);
project2.addTask(task1);
project2.addTask(task2);

let currentProject = projectList.projects[0];

const openForm = () => {
    projectForm.style.display = 'block';
}

const closeForm = () => {
    document.querySelector('.project-form').reset();
    projectForm.style.display = 'none'
}

const openTaskForm = () => {
    taskForm.style.display = 'block';
}

const closeTaskForm = () => {
    document.querySelector('.task-form').reset();
    taskForm.style.display = 'none';
}

const submitForm = () => {
    const input = document.querySelector('#projectName');
    const newProject = Project(input.value);

    console.log(newProject);
    projectList.addProject(newProject);
    closeForm();
}

const submitTaskForm = () => {
    const title = document.querySelector('#taskName');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('input[name="priority"]:checked');

    const newTask = Task(title.value, format(new Date(dueDate.value), 'dd-MM-yyyy'), priority.value);

    currentProject.addTask(newTask);

    closeTaskForm();
}

const displayTasks = (tasks) => {
    const taskDiv = container.querySelector('.task-div');
    const table = document.createElement('table');

    
    // create header for table
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');

    th1.innerText = 'Title';
    th2.innerText = 'Due Date';
    th3.innerText = 'Priority'

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.appendChild(tr);
    
    // create data for table with task information
    for(let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td1.innerText = task.title;
        td2.innerText = task.dueDate; 
        //td3.innerHTML = '<span class="dot green"></span>';
        
        if(task.priority == 1) td3.innerHTML = '<span class="dot red"></span>';
        else if(task.priority == 2) td3.innerHTML = '<span class="dot orange"></span>';
        else td3.innerHTML = '<span class="dot green"></span>';

        td1.setAttribute('contentEditable', 'true');
        td2.setAttribute('contentEditable', 'true');
        td2.style.textAlign = 'center';
        td3.style.textAlign = 'center';

        td1.addEventListener('focusout', () => currentProject.editTaskTitle(td1.innerText, i));
        td2.addEventListener('focusout', () => {
            currentProject.editTaskDate(td2.innerText, i);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            currentProject.deleteTask(i);
            displayProject(currentProject);
        });
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3)
        tr.appendChild(deleteButton);
        table.appendChild(tr);
    }

    taskDiv.appendChild(table);
}

export const displayProject = (project) => {
    currentProject = project;

    if(project.tasks.length === 0) {
        container.innerHTML = 
            `<h2>${project.title}</h2>
            <p>No Tasks</p>
            <button class="add-task-btn">+Add Task</button>`;
    } else {
        container.innerHTML = 
            `<h2>${project.title}</h2>
            <div class="task-div"></div>
            <button class="add-task-btn">+Add Task</button>`;

        displayTasks(project.tasks);
    }

    const button = container.querySelector('.add-task-btn');
    button.addEventListener('click', openTaskForm);
}

export const displayProjectList = (projectList) => {
    const projects = projectList.projects;
    const projectListDiv = document.querySelector('.project-list');

    projectListDiv.innerHTML = '';
    
    for(let i = 0; i < projects.length; i++) {
        const link = document.createElement('a');
        link.innerText = projects[i].title;
        link.href = '';
        link.classList.add('project-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            displayProject(projects[i]);
        });
        projectListDiv.appendChild(link);
    }
}

export const init = () => {
    displayProject(projectList.projects[0]);
    displayProjectList(projectList);
}

// event listeners
addProjectButton.addEventListener('click', openForm);
span.addEventListener('click', closeForm);
taskSpan.addEventListener('click', closeTaskForm);
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
    displayProjectList(projectList);
});
submitTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitTaskForm();
    displayProject(currentProject);
})
