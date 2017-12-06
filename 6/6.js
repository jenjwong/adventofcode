const fs = require('fs');
const path = require('path');

const test = [0, 2, 7, 0];

const filePath = path.join(__dirname, '6Input.js');

function parse(data) {
  return data.split('\t').map(item => parseInt(item));
}

function getDistribution1(data) {
  const currentSequence = data;
  let count = 0;
  const lookup = {};

  while (lookup[currentSequence.join('')] === undefined) {
    lookup[currentSequence.join('')] = true;
    const largestNum = Math.max(...currentSequence);
    const largestNumIndex = currentSequence.indexOf(largestNum);
    currentSequence[largestNumIndex] = 0;
    for (let i = 0; i < largestNum; i++) {
      const val = (largestNumIndex + 1 + i) % currentSequence.length;
      currentSequence[val] = currentSequence[val] + 1;
    }
    count++;
  }
  return count;
}

function getDistribution2(data) {
  const currentSequence = data;
  let count = 0;
  const lookup = {};
  let lastNum = null;

  while (lookup[currentSequence.join('')] === undefined) {
    lookup[currentSequence.join('')] = lastNum;
    lastNum = currentSequence.join('');
    const largestNum = Math.max(...currentSequence);
    const largestNumIndex = currentSequence.indexOf(largestNum);
    currentSequence[largestNumIndex] = 0;
    for (let i = 0; i < largestNum; i++) {
      const val = (largestNumIndex + 1 + i) % currentSequence.length;
      currentSequence[val] = currentSequence[val] + 1;
    }
  }
  let prev = lookup[lastNum];
  while (prev !== currentSequence.join('')) {
    prev = lookup[prev];
    count++;
  }
  return count + 2;
}

fs.readFile(filePath, 'utf8', (err, res) => {
  console.log(getDistribution1(test));
  console.log(getDistribution1(parse(res)));
  console.log(getDistribution2(parse(res)));
});
