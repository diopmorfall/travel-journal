import './App.css';
import Topbar from './components/Topbar'
import Journey from './components/Journey'
import trips from './trips'

function App() {
    const journeys = trips.map(trip => 
        <Journey key={trip.id}
            location={trip.location}
            country={trip.country}
            coordinates={trip.coordinates}
            startDate={trip.startDate}
            endDate={trip.endDate}
            description={trip.description}
            imgUrl={trip.imgUrl}
        />
    )

    return (
        <div className="App">
            <Topbar />
            <div className='journeys'>
                {journeys}
            </div>
        </div>
    );
}

export default App;
