import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const indexes = {
    id: 0,
    ifSurvived: 1,
    class: 2,
    name: 3,
    sex: 4,
    age: 5,
    sib: 6,
    parch: 7,
    ticket: 8,
    fare: 9,
    cabin: 10,
    port: 11,
  };
  const processedData = content
    .split('\r\n')
    .slice(1, -1)
    .map((passanger) => {
      const result = passanger
        .split('"')
        .map((part, index) => {
          if (index === 0 || index === 2) {
            return part.split(',');
          }
          return part;
        })
        .flat()
        .filter((item, index) => index !== 3 && index !== 5);
        return result;
    });
  //first step
  const totalAmount = processedData.reduce((acc, passanger) => acc += 1, 0);
  //second step
  const allports = processedData
    .map((passanger) => passanger[indexes.port])
    .filter((port) => port !== undefined);
  const ports = _.uniqBy(allports).join('\n  ').trim();
  //third step
  //fourth step
  //fifth step
  // END
  const output = `Total amount of passengers:
  ${totalAmount}
The ports passengers were embarked from:
  ${ports}
Gender ratio:
  male - %
  female - %
Survaving ratio:
  %
Names, that start with A:`;
  console.log(output);
}
