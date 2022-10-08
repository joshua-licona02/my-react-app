import './App.css';
import Title from './Title'
import Sensor1 from './buttons/sensor1'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Title/>

        <p>
          This is the GUI for our data
        </p>

        <Sensor1>Sensor1</Sensor1>
      </header>
      
    </div>
  );
}

export default App;