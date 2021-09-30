import { Component } from 'react';

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
        {name: 'John Smith', salary: 300, bonus: true, id: '1'},
        {name: 'Adam Shepard', salary: 1000, bonus: false, id: '2'},
        {name: 'Nick Codey', salary: 800, bonus: true, id: '3'},
      ],
      maxId: 4
    }
  }

  onDelete = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  onAdd = (obj) => {
    this.setState(({data, maxId}) => {
      obj.id = maxId;
      const newArr = data.concat(obj);
      return {
        data: newArr,
        maxId: maxId + 1
      }
    })
  }

  render() {

    const {data} = this.state;

    return (
      <div className="app">
          <AppInfo />

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={data}
            onDelete={this.onDelete}/>
          <EmployeesAddForm
            onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
