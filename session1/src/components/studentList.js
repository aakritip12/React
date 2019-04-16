import React, { Component } from 'react'

class StudentList extends React.PureComponent{
    constructor(props){
        super(props)
    }
    listItems = () => {
        return this.props.studentDataList.map((d, idx) => 
            <ShowStudentList key={idx} renderDetails={this.props.renderDetails} idx={idx} name={d.first_name}/>
        );
    }
    render() {
        console.log(this.props)
        return (
            <div class="component-container">
                <label class="component-heading">Student List</label>
                {this.listItems()}
            </div>
        );
    }
}
class ShowStudentList extends React.PureComponent{
    render() {
        return (
            <div class="student-list" onClick={() => this.props.renderDetails(this.props.idx)}>{this.props.name}</div>
        );
    }
}
export default StudentList