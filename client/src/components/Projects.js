import React from 'react'; 
import Project from './Project';

const Projects = props => {
    return (
        <div> 
            <h1>Project List</h1>
            {props.projects.map(project => { return (
                <Project project={project} key={project.id} />
            )})}
        </div>
    )
}; 


export default Projects; 