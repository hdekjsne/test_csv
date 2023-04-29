import solution from '../index.js';

const path = '../__fixtures__/mytest.csv';

const expected = `Total amount of passengers:
    5
The ports passengers were embarked from:
    Q
    S
    C
    B
    A
Gender ratio:
    male - 60%
    female - 40%
Survaving ratio:
    40%
Names, that start with A:`;

test('my test', () => {
  expect(solution(path)).toEqual(expected);
});

console.log(expected);
