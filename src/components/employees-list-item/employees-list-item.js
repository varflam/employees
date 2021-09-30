import {Component} from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bonus: false,
            like: false,
        }
    }

    onBonus = () => {
        this.setState(({bonus}) => ({
            bonus: !bonus
        }));
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        let classNames = 'list-group-item d-flex justify-content-between';

        const {name, salary, onDelete} = this.props;
        const {bonus, like} = this.state;

        if(bonus) {
            classNames += ' increase';
        }

        if(like) {
            classNames += ' like';
        }
        return(
        <li className={classNames}>
            <span 
            className="list-group-item-label"
            onClick={this.onLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={this.onBonus}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
        )
    }
} 

export default EmployeesListItem;