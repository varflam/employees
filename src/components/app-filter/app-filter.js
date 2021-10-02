import "./app-filter.css";

const AppFilter = ({onFilterEmp, filter}) => {

    const btnData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salary > 1000', label: 'З/П больше 1000$'},
    ];

    const btns = btnData.map(({name, label}) => {
        const classNames = name === filter ? "btn btn-light" : "btn btn-outline-light";
        return (
            <button
                type="button"
                className={classNames}
                key={name}
                onClick={() => onFilterEmp(name)}>
                {label}
                </button>
            )
    })

    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter;