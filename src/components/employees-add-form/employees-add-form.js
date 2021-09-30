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

    render() {
        const {onAdd} = this.props;
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onAdd({name, salary, bonus: false})
                    }}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onInput}
                        name="name" />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onInput}
                        name="salary" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;