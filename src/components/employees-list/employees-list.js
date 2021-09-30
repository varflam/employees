import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const employeesList = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                onDelete={() => onDelete(id)}
                {...itemProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {employeesList}
        </ul>
    )
}

export default EmployeesList;