import React from 'react';
import operate from '../logic/operate';

describe( 'operator.js tests', () => {

  test('sum', () => {
    expect(operate(5, 4, '+')).toBe('9');
    expect(operate(-5, 4, '+')).toBe('-1');
  });

  test('subtraction', () => {
    expect(operate(5, 4, '-')).toBe('1');
    expect(operate(3, 4, '-')).toBe('-1');
  });

  test('multiplication', () => {
    expect(operate(5, 4, 'x')).toBe('20');
    expect(operate(5, 0, 'x')).toBe('0');
  });

  test('division', () => {
    expect(operate(5, 5, '÷')).toBe('1');
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });
}
)