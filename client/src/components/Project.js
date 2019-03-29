import React from 'react'; 


const Project = props => {
    console.log("project props", props);
    return (
        <div>
            <h2>{props.project.name}</h2>
            <p>Description: {props.project.description}</p> 
        </div>
    )
} 

export default Project;