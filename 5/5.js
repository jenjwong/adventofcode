const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '5Input.js');

const test = [0, 3, 0, 1, -3];
function parse(data) {
  return data.split('\n');
}

function countSteps1(list) {
  let i = 0;
  let count = 0;
  let jump;
  while (i < list.length) {
    jump = list[i];
    list[i] = parseInt(list[i]) + 1;
    i = parseInt(jump) + i;
    count++;
  }
  return count;
}

function countSteps2(list) {
  let i = 0;
  let count = 0;
  let jump;
  while (i < list.length) {
    jump = list[i];
    if (jump >= 3) {
      list[i] = parseInt(list[i]) - 1;
    } else {
      list[i] = parseInt(list[i]) + 1;
    }
    i = parseInt(jump) + i;
    count++;
  }
  return count;
}

fs.readFile(filePath, 'utf8', (err, res) => {
  console.log(countSteps(parse(res)));
  console.log(countSteps2(parse(res)));
});
