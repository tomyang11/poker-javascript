import './css/App.css';

import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <p>Ben and Tom Poker Project</p>   
      <div className="hand">
        <Card name="10_of_clubs"/>   
        <Card name="7_of_hearts" /> 
      </div>
      <div className="hand">
        <Card name="8_of_clubs"/>   
        <Card name="8_of_hearts" /> 
      </div>
      <div className="hand">
        <Card name="king_of_diamonds"/>   
        <Card name="queen_of_hearts" /> 
      </div>

      <div className="board">
        <Card name="ace_of_hearts"/>   
        <Card name="king_of_hearts" /> 
        <Card name="queen_of_hearts"/>   
        <Card name="jack_of_hearts" /> 
        <Card name="10_of_hearts"/>   
      </div>

      <div className="dealer-chip">
        <p>DEALER</p>
      </div>

    </div>
  );
}

export default App;
