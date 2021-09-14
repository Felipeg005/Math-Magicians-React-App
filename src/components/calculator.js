import React from 'react'; // eslint-disable-line

class Calculator extends React.Component {
  render() {
    return (
      <main className='calculator-container'>
        <div className='display-board'>0</div>
        <button className='s-button'>{this.props}AC</button>
        <button className='s-button'>+/-</button>
        <button className='s-button'>%</button>
        <button className='s-orange-button'>÷</button>
        <button className='s-button'>7</button>
        <button className='s-button'>8</button>
        <button className='s-button'>9</button>
        <button className='s-orange-button'>x</button>
        <button className='s-button'>4</button>
        <button className='s-button'>5</button>
        <button className='s-button'>6</button>
        <button className='s-orange-button'>-</button>
        <button className='s-button'>1</button>
        <button className='s-button'>2</button>
        <button className='s-button'>3</button>
        <button className='s-orange-button'>+</button>
        <button className='m-button'>0</button>
        <button className='s-button'>.</button>
        <button className='s-orange-button'>=</button>
      </main>
    );
  }
}

export default Calculator;