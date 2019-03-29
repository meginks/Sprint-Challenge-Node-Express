import React from 'react'; 
import axios from 'axios';

class AddProjectForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "", 
            description: ""
        }
    } 

    addProject = () => {
        axios
        .post('http://localhost:5001/api/projects/', {name: this.state.name, description: this.state.description } )
        .then( res => {
            this.setState({
               projects: res.data 
            })
        })
        .catch( err => {
            console.log(err);
        })
    }

    handleInput = e => {
        e.preventDefault(); 
       this.setState({[e.target.name]: e.target.value }); 
    }

    render() {
        return (
        <div>
            < form onSubmit={this.addProject}>
                <input
                onChange={this.handleInput}
                placeholder="name"
                value={this.state.name}
                name="name" />
                <input
                onChange={this.handleInput}
                placeholder="description"
                value={this.state.description}
                name="description" /> 
                <button type="submit">add project</button>
            </form>
        </div>
        )
    }
}


export default AddProjectForm; 