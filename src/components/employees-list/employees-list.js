import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const employeesList = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {employeesList}
        </ul>
    )
}

export default EmployeesList;