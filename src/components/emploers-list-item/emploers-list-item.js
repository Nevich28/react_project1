import './emploers-list-item.css';

const EmploersListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise, onChangeSalary} = props

    // const changeSalary = (e) => {
    //     const newSalary = e.target.value;
    //     // onchangeSalary
    //     console.log(newSalary);
    // }

    return (
        <li className={"list-group-item d-flex justify-content-between" + (increase ? ' increase' : '') + (rise ? ' like' : '')}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">{name}</span>
            <input onChange={onChangeSalary} type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp} 
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmploersListItem;