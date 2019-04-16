import React, { Component } from 'react';
import StudentList from './components/studentList'
import StudentDetails from './components/studentDetails'
import StudentEdit from './components/studentEdit'
import './App.css';
import './style.css';

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      renderDetailsValue: -1,
      renderEditValues: -1,
      studentDataList: [{
          "first_name": "Neille",
          "age": 26,
          "location": "Japan"
      }, {
          "first_name": "Pennie",
          "age": 32,
          "location": "Netherlands"
      }, {
          "first_name": "Beatrisa",
          "age": 35,
          "location": "China"
      }, {
          "first_name": "Rosalie",
          "age": 25,
          "location": "Vietnam"
      }, {
          "first_name": "Gunner",
          "age": 28,
          "location": "Slovenia"
      }, {
          "first_name": "Laure",
          "age": 27,
          "location": "United States"
      }, {
          "first_name": "Lana",
          "age": 40,
          "location": "Poland"
      }, {
          "first_name": "Elroy",
          "age": 28,
          "location": "Iran"
      }, {
          "first_name": "Bianca",
          "age": 26,
          "location": "Indonesia"
      }, {
          "first_name": "Ernesta",
          "age": 30,
          "location": "Russia"
      }]
    }
  }
  renderDetails = (idx) => {
    console.log(idx)
    if(this.state.renderDetailsValue === this.state.renderEditValues)
      this.renderEdit(-1)
    this.setState(() => {
      return {
        renderDetailsValue: idx
      }
    });
  }
  renderEdit = (idx) => {
    this.setState({
      renderEditValues: idx
    });
  }
  editValue = (key, value) => {
    let stDataCopy = this.state.studentDataList
    stDataCopy[this.state.renderEditValues][key] = value
    this.setState({
      studentDataList: stDataCopy
    });
  }
  render() {
    return (
      <div className="App">   
        <h1>STUDENT DETAILS</h1>
        <StudentList studentDataList={this.state.studentDataList} renderDetails={this.renderDetails}/>
        {
          this.state.renderDetailsValue !== -1
          &&
          <StudentDetails showDetails={this.state.studentDataList[this.state.renderDetailsValue]} renderEdit={this.renderEdit} idx={this.state.renderDetailsValue}/>
        }
        {
          this.state.renderEditValues !== -1
          &&
         <StudentEdit editDetails={this.state.studentDataList[this.state.renderEditValues]} editValue={this.editValue}/ 
         >
        }
      </div>
    );
  }
}

export default App;
