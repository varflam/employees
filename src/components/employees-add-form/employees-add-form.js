import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
    
        const {onAdd} = this.props;
        const {name, salary} = this.state; 
        if(name.length > 3) {
            onAdd(name, salary);
            this.setState(({name, salary}) => {
                return {
                    name: '',
                    salary: ''
                }
            })
        }
    }

    render() {

        const {name, salary} = this.state; 

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onInput}
                        name="name"
                        value={name}
                        required />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onInput}
                        name="salary"
                        value={salary}
                        required />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;