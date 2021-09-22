import React, { useEffect, useState } from 'react'; // eslint-disable-line
import { BrowserRouter as Router, Route } from 'react-router-dom';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  useEffect(() => {
    if (state.total !== null && state.next === null) {
      document.querySelector('.display-board').innerHTML = state.total;
    } else if ((state.next !== null && state.total !== null)
    && (state.next !== undefined && state.total !== undefined)) {
      document.querySelector('.display-board').innerHTML = state.next;
    } else if (state.next !== null && state.total === null) {
      document.querySelector('.display-board').innerHTML = state.next;
    } else if ((state.next === null && state.total === null)) {
      document.querySelector('.display-board').innerHTML = '0';
    } else if (((typeof state.next) !== 'number') || (typeof state.total) !== 'number') {
      setState({ next: null, total: null, operation: null });
    }
  }, [state]);
  const displayBoard = async (e) => {
    await setState(calculate(state, e.target.innerHTML));
  };

  return (
    <Router>
      <Route path='/'>
        <React.Fragment>
          <main>
            <h2 className='calculator-title'>Let's do some Math!</h2>
            <div className='calculator-container'>
              <div className='display-board'>0</div>
              <button className='s-button' onClick={(e) => displayBoard(e)}>AC</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>+/-</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>%</button>
              <button className='s-orange-button' onClick={(e) => displayBoard(e)}>÷</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>7</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>8</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>9</button>
              <button className='s-orange-button' onClick={(e) => displayBoard(e)}>x</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>4</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>5</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>6</button>
              <button className='s-orange-button' onClick={(e) => displayBoard(e)}>-</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>1</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>2</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>3</button>
              <button className='s-orange-button' onClick={(e) => displayBoard(e)}>+</button>
              <button className='m-button' onClick={(e) => displayBoard(e)}>0</button>
              <button className='s-button' onClick={(e) => displayBoard(e)}>.</button>
              <button className='s-orange-button' onClick={(e) => displayBoard(e)}>=</button>
            </div>
          </main>
        </React.Fragment>
      </Route>
    </Router>
  );
};

export default Calculator;