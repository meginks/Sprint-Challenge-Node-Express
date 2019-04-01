import React, { Component } from 'react';
import axios from 'axios';
import Projects from './components/Projects';
import AddProjectForm from './components/AddProjectForm';
import './App.css';

class App extends Component { 
  constructor() {
    super(); 
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    axios 
    .get('http://localhost:5001/api/projects/')
    .then(res => 
      this.setState({
        projects: res.data
      }))
  }

  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects} />
        <AddProjectForm />
      </div>
    );
  }
}

export default App;
