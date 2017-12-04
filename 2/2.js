const fs = require('fs');
// Day 2: Part 1
// Declarative: linear time

function findDifference(group) {
  return Math.max(...group) - Math.min(...group);
}

function findChecksum(data) {
  return data
    .map(row => findDifference(row))
    .reduce((total, dif) => total + dif);
}

// Imperative: linear time

function findChecksum(data) {
  let min = Infinity;
  let max = -Infinity;
  let currentNumber = '';
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== '\n' && data[i] !== '\t') {
      currentNumber += data[i];
    }
    if (data[i] === '\t' || data[i] === '\n') {
      min = Math.min(min, currentNumber);
      max = Math.max(max, currentNumber);
      currentNumber = '';
    }
    if (data[i] === '\n' || i === data.length - 1) {
      total += max - min;
      min = Infinity;
      max = -Infinity;
      currentNumber = '';
    }
  }
  return total;
}

// Dary 2: Part 2
// Declarative: quadratic time

function findDivisible(arr) {
  const sorted = arr.sort((a, b) => b - a);
  return sorted.reduce((acc, num1) => {
    for (const num2 of sorted) {
      if (num1 % num2 == 0 && num1 !== num2) {
        acc = num1 / num2;
      }
    }
    return acc;
  }, 0);
}

function parseToArrays(data) {
  return data.split('\n').map(item => item.split('\t'));
}

fs.readFile('./2Input.js', 'utf8', (err, res) => {
  parseToArrays(res)
    .map(row => findChecksum(row))
    .reduce((total, num) => total + num);

  parseToArrays(res)
    .map(row => findDivisible(row))
    .reduce((total, num) => total + num);
});
