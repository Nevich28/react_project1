import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../emploters-list/emploers-list';
import EmploersAddForm from '../emploers-add-form/emploers-add-form';
import './app.css';


// class  WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 27,
//             text: '+++',
//             position: ''
//         }
//     }

//     nextYear = () => {
//         this.setState(state => ({
//             years: state.years + 1
//         }))
//     }
//     commitInputChanges = (e) => {
//         this.setState({
//             position: e.target.value
//         })
//     }
//     render() {
//         const {name, surname, link} = this.props;
//         const {position, years, text} = this.state;
//         return (
//             <div>
//                 <button onClick={this.nextYear}>{text}</button>
//                 <h1>My name is {name}, surname - {surname},
//                     age - {years},
//                     position - {position}</h1>
//                 <a href={link}>My profile</a>
//                 <form>
//                     <span>Введите должность</span>
//                     <input type="text" onChange={this.commitInputChanges}/>
//                 </form>
//             </div>
//         )
//     }
// }

class App extends Component {
    // return (
    //     <div className='app'>
    //         <WhoAmI name='John' surname='Smith' link ='facebook.com'/>
    //         <WhoAmI name='Alex' surname='Shepard' link ='instagram.com'/>
    //     </div>
    // );
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '', 
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))

    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default: 
                return items
        }
    }
    
    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onChangeSalary = (id, sal) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: sal.replace(/\$/g, '')}
                }
                return item;
            })
        }))
    }

    render () {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo
                countWorker={data.length}
                increaseCount={data.filter(elem => elem.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>  
                </div>
                    <EmploersList
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}
                        onChangeSalary={this.onChangeSalary}
                        />
                    <EmploersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;