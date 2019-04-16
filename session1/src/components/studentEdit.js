import React, { Component } from 'react'

export default class StudentEdit extends Component{
    change = event => {
        const _KEY = event.target.attributes.getNamedItem('data-attribute').value;
        this.props.editValue(_KEY, event.target.value)
    }
    render() {
        return (
            <div class="component-container">
                <label class="component-heading">Edit Student Details</label>
                <div class="student-details">
                    <div><label>First Name: </label>
                        <input type="text" defaultValue={this.props.editDetails.first_name} 
                                data-attribute='first_name' onChange={this.change}/></div>
                    <div><label>Age: </label>
                        <input type="number" defaultValue={this.props.editDetails.age} 
                                data-attribute='age' onChange={this.change}/></div>
                    <div><label>Location: </label>
                        <input type="text" defaultValue={this.props.editDetails.location} 
                                data-attribute='location' onChange={this.change}/></div>
                </div>
            </div>
        );
    }
}
