import calculate from '../logic/calculate';

describe( 'operator.js tests', () => {

  test('AC', () => {
    expect(calculate({}, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('.', () => {
    const obj = {
      total: null,
      next: '0.',
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual({total: null,
      next: '0.',
      operation: null});
  });

  test('0', () => {
    expect(calculate({}, '0')).toStrictEqual({"next": "0", "total": null,});
  });
}
)