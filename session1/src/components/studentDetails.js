import React, { Component } from 'react'

export default class StudentDetails extends Component{
    render() {
        return (
            <div class="component-container">
                <label class="component-heading">Student Details</label>
                <div class="student-details">
                    <div>First Name: {this.props.showDetails.first_name}</div>
                    <div>Age: {this.props.showDetails.age}</div>
                    <div>Location: {this.props.showDetails.location}</div>
                </div>
                <br />
                <button class="edit-button" onClick={() => this.props.renderEdit(this.props.idx)}>EDIT</button>
            </div>
        );
    }
}
