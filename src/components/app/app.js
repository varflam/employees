import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {name: 'John Smith', salary: 300, bonus: true, rise: true, id: nextId()},
        {name: 'Adam Shepard', salary: 1000, bonus: false, rise: false, id: nextId()},
        {name: 'Nick Codey', salary: 800, bonus: true, rise: false, id: nextId()},
      ],
    }
  }

  onDelete = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  onAdd = (name, salary) => {
    const employee = {
      name,
      salary,
      bonus: false,
      rise: false,
      id: nextId()
    }

    this.setState(({data}) => {
      return {
        data: data.concat(employee),
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]};
        }
          return item;
      })
    }));
  }

  render() {

    const {data} = this.state;

    const employees = data.length;
    const employeesWithBonus = data.filter(item => item.bonus === true).length;

    return (
      <div className="app">
          <AppInfo 
            employees={employees}
            employeesWithBonus={employeesWithBonus}/>

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={data}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm
            onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
