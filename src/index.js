 import Project from './Project';
 import Task from './Task';
 import * as UI from './UI';
 
 //Dummy Project
const today = Project('Today');
const project1 = Project('Create To Do List');
const projectList = [today, project1];
console.log(projectList);

UI.displayProject(today);

