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
        {name: 'Adam Shepard', salary: 2000, bonus: false, rise: false, id: nextId()},
        {name: 'Nick Codey', salary: 800, bonus: true, rise: false, id: nextId()},
      ],
      term: '',
      filter: '',
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

  searchEmp = (items, term) => {
    if(term === '') return items;

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    });
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterEmp = (filter) => {
    const {data} = this.state;

    switch(filter) {
      case 'rise':
        return data.filter(item => item.rise);
      
      case 'salary > 1000':
        return data.filter(item => item.salary > 1000);

      default:
        return data;
    }
  }

  onFilterEmp = (filter) => {
    this.setState({filter});
  }

  render() {

    const {data, term, filter} = this.state;

    const employees = data.length;
    const employeesWithBonus = data.filter(item => item.bonus === true).length;
    const visibleData = this.searchEmp(this.filterEmp(filter), term);

    return (
      <div className="app">
          <AppInfo 
            employees={employees}
            employeesWithBonus={employeesWithBonus}/>

          <div className="search-panel">
              <SearchPanel
              onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter
              onFilterEmp={this.onFilterEmp}
              filter={filter}/>
          </div>
          
          <EmployeesList 
            data={visibleData}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm
            onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
