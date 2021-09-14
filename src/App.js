import './App.css';
import Calculator from './components/calculator';

function App() {
  const newCalculator = new Calculator();
  return (
    newCalculator.render()
  );
}

export default App;
