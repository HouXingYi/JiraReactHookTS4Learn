import './App.css';
import { Clock } from './components/clock'
import { Clock2 } from './components/clock2'


function App() {
  return (
    <div className="App">
      <Clock date={new Date()} />
      <Clock2 date={new Date()} />
    </div>
  );
}


export default App;
