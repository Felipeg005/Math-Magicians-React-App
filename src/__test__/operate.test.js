import React from 'react';
import operate from '../logic/operate';

describe( 'operator.js tests', () => {

  test('sum', () => {
    // operate(numberOne, numberTwo, operation)
    expect(operate(5, 4, '+')).toBe('9');
  });
}
)