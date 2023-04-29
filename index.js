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
  const totalAmount = processedData.reduce((acc) => acc += 1, 0);
  //second step
  const allports = processedData
    .map((passanger) => passanger[indexes.port])
    .filter((port) => port !== undefined);
  const ports = _.uniqBy(allports).join('\n  ').trim();
  //third step
  const malesCount = processedData
    .filter((passanger) => passanger[indexes.sex] === 'male')
    .reduce((acc) => acc + 1, 0);
  const femalesCount = processedData
    .filter((passanger) => passanger[indexes.sex] === 'female')
    .reduce((acc) => acc + 1, 0);
  const malesRatio = Math.round((malesCount / totalAmount) * 100);
  const femalesRatio = Math.round((femalesCount / totalAmount) * 100);
  //fourth step
  const survavalsCount = processedData
    .filter((passanger) => passanger[indexes.ifSurvived] == true)
    .reduce((acc) => acc + 1, 0);
  const survavingRatio = Math.round((survavalsCount / totalAmount) * 100);
  //fifth step
  //I couldn't understand, what exactly is a name, so here is the simple snippet for surnames
  const allsurnames = processedData
    .map((passanger) => passanger[indexes.name])
    .map((name) => name.split(','))
    .map((parts) => parts[0])
    .filter((surname) => surname.startsWith('A'));
  const uniqsurnames = _.uniqBy(allsurnames);
  const surnames = uniqsurnames.join('\n  ').trim();
  //the last step
  const output = `Total amount of passengers:
  ${totalAmount}
The ports passengers were embarked from:
  ${ports}
Gender ratio:
  male - ${malesRatio}%
  female - ${femalesRatio}%
Survaving ratio:
  ${survavingRatio}%
Names, that start with A:
  ${surnames}`;
  console.log(output);
  // END
}
