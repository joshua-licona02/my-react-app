import './App.css';
import Title from './Title'
//import Sensor1 from './component/sensor1'


function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Title/>
        <body>
    
        <h2>Flow Rate</h2>
          <label for ="FlowRateIndicator">Current Flow Rate: </label>
          <input type ="text" id="FlowRateIndicator" name="FlowRateIndicator" placeholder=" "></input>
          <label for ="FlowRateTarget">Target Flow Rate: </label>
          <input type ="text" id="FlowRateTarget" name="FlowRateTarget" placeholder=" "></input>
          <button type="button">Set Target</button>
        <h2>Water Level</h2>
          <label for ="WaterLevelIndicator">Current Water Level: </label>
          <input type ="text" id="WaterLevelIndicator" name="WaterLevelIndicator" placeholder=" "></input>
          <label for ="WaterLevelTarget">Target Water Level: </label>
          <input type ="text" id="WaterLevelTarget" name="WaterLevelTarget" placeholder=" "></input>
          <button type="button">Set Target</button>
        <h2>Temperature</h2>
          <label for ="TemperatureIndicator">Current Temperature: </label>
          <input type ="text" id="TemperatureIndicator" name="TemperatureIndicator" placeholder=" "></input>
          <label for ="TemperatureTarget">Temperature Level: </label>
          <input type ="text" id="TemperatureTarget" name="TemperatureTarget" placeholder=" "></input>
          <button type="button">Set Target</button>
      </body>
    </div>
  );
}

export default App;

