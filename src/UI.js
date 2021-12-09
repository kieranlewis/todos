const projectForm = document.querySelector('#form-container');
const addProjectButton = document.querySelector('.add-project-btn');
const span = document.querySelector('.close');

export const openForm = () => {
    projectForm.style.display = 'block';
}

export const closeForm = () => {
    document.querySelector('.project-form').reset();
    projectForm.style.display = 'none'
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

// event listeners
addProjectButton.addEventListener('click', openForm);
span.addEventListener('click', closeForm);
