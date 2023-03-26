import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../emploters-list/emploers-list';
import EmploersAddForm from '../emploers-add-form/emploers-add-form';
import './app.css';


function App() {
    const data = [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Alex M.', salary: 3000, increase: true, id: 2},
        {name: 'Carl W.', salary: 5000, increase: false, id: 3}
    ]
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                
            </div>
                <EmploersList data={data}/>
                <EmploersAddForm/>
        </div>
    )
}

export default App;