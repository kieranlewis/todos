const projectForm = document.querySelector('#form-container');
const addProjectButton = document.querySelector('#add-project-btn');
const span = document.querySelector('.close');
const submitButton = document.querySelector('#submit-btn');

const openForm = () => {
    projectForm.style.display = 'block';
}

const closeForm = () => {
    document.querySelector('.project-form').reset();
    projectForm.style.display = 'none'
}

const submitForm = () => {
    const input = document.querySelector('#projectName');
    console.log(input.value);
    console.log('You are trying to submit');

    closeForm();
}

export const displayProject = (project) => {
    const container = document.querySelector('.container');
    container.innerHTML = `<h2>${project.title}</h2>`;

    if(project.tasks === undefined) {
        container.innerHTML += '<p>No Tasks</p>';
    } else {
        // loop through all tasks and display them on page
    }
}

export const displayProjectList = (projectList) => {
    const projects = projectList.projects;
    const projectListDiv = document.querySelector('.project-list');
    
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

// event listeners
addProjectButton.addEventListener('click', openForm);
span.addEventListener('click', closeForm);
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
});