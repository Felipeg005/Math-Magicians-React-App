import React from 'react'; // eslint-disable-line
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    // this.displayBoard = this.displayBoard.bind(this);
  }

  async displayBoard(e) {
    await this.setState(calculate(this.state, e.target.innerHTML));
    if (this.state.total !== null && this.state.next === null) {
      document.querySelector('.display-board').innerHTML = this.state.total;
    } else if (this.state.next !== null && this.state.total !== null) {
      document.querySelector('.display-board').innerHTML = this.state.next;
    } else if (this.state.next !== null && this.state.total === null) {
      document.querySelector('.display-board').innerHTML = this.state.next;
    } else if (this.state.next === null && this.state.total === null) {
      document.querySelector('.display-board').innerHTML = '0';
    }
    console.log(this.state);
  }

  render() {
    return (
      <main className={this.props.containerClass}>
        <div className='display-board'>0</div>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>AC</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>+/-</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>%</button>
        <button className='s-orange-button' onClick={(e) => this.displayBoard(e)}>÷</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>7</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>8</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>9</button>
        <button className='s-orange-button' onClick={(e) => this.displayBoard(e)}>x</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>4</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>5</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>6</button>
        <button className='s-orange-button' onClick={(e) => this.displayBoard(e)}>-</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>1</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>2</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>3</button>
        <button className='s-orange-button' onClick={(e) => this.displayBoard(e)}>+</button>
        <button className='m-button' onClick={(e) => this.displayBoard(e)}>0</button>
        <button className='s-button' onClick={(e) => this.displayBoard(e)}>.</button>
        <button className='s-orange-button' onClick={(e) => this.displayBoard(e)}>=</button>
      </main>
    );
  }
}

export default Calculator;