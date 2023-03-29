import './app-info.css'

const AppInfo = ({countWorker, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников  вкомпании N</h1>
            <h2>Общее число сотрудников: {countWorker}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    )
}

export default AppInfo;