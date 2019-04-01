import React from 'react'; 
import axios from 'axios';

class Project extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        showDetails: false, 
        description: '',
        notes: ''
    }
    } 

    toggleShowDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }


    getActions = (id) => {
        axios
        .get(`http://localhost:5001/api/projects/${id}/actions`)
        .then(res => {
            this.toggleShowDetails();
            this.setState({
                description: res.data.description,
                notes: res.data.notes
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        console.log("project props", this.props);
    return (
        <div>
            <h2>{this.props.project.name}</h2>
            <p>Description: {this.props.project.description}</p> 
            <button onClick={() => this.getActions(this.props.project.id)}>see project details</button> 
            { this.state.showDetails ?
                    <div>{this.state.notes}
                    {this.state.description}</div>
                : null
            }
        </div>
    )
    }
}

export default Project;