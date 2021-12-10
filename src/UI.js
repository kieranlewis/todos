import Project from './Project';
import ProjectList from './ProjectList';
import Task from './Task';

const projectForm = document.querySelector('#form-container');
const addProjectButton = document.querySelector('#add-project-btn');
const span = document.querySelector('.close');
const submitButton = document.querySelector('#submit-btn');
const container = document.querySelector('.container');

//Dummy Project
const today = Project('Today');
const project1 = Project('Create To Do List');
const project2 = Project('Pickup shopping');
const projectList = ProjectList([today, project1, project2]);
const task1 = Task('Fill Car', 'Go to the petrol station to fill up the car', new Date(), 3);
const task2 = Task('Drive to supermarket', '', new Date(), 1);
project2.addTask(task1);
project2.addTask(task2);

const openForm = () => {
    projectForm.style.display = 'block';
}

const closeForm = () => {
    document.querySelector('.project-form').reset();
    projectForm.style.display = 'none'
}

const submitForm = () => {
    const input = document.querySelector('#projectName');
    const newProject = Project(input.value);

    console.log(newProject);
    projectList.addProject(newProject);
    closeForm();
}

const addTask = () => {
    console.log('You are clicking a button');
}

const displayTasks = (tasks) => {
    const taskDiv = container.querySelector('.task-div');
    taskDiv.innerHTML = `<p>There are tasks</p>`;
}

export const displayProject = (project) => {
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
    button.addEventListener('click', addTask);
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
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
    displayProjectList(projectList);
});