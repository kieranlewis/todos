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

// event listeners
addProjectButton.addEventListener('click', openForm);
span.addEventListener('click', closeForm);
