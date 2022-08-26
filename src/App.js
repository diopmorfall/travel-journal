import './App.css';
import Topbar from './components/Topbar'
import Journey from './components/Journey'

function App() {
    //todo: array of <Journey />

    return (
        <div className="App">
            <Topbar />
            <div className='journeys'>
                <Journey />
            </div>
        </div>
    );
}

export default App;
