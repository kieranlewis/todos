 import Project from './Project';
 import Task from './Task';
 import * as UI from './UI';
 import ProjectList from './ProjectList';
 
 //Dummy Project
const today = Project('Today');
const project1 = Project('Create To Do List');
const project2 = Project('Pickup shopping')
const projectList = ProjectList([today, project1, project2]);

UI.displayProject(today);
UI.displayProjectList(projectList);


