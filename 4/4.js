const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '4Input.js');

function parse(data) {
  return data.split('\n').map(str => str.split(' '));
}

function isUnique(params) {
  const uniquePasswords = new Set(params);
  const isUnique = uniquePasswords.size === params.length;
  uniquePasswords.clear();
  return isUnique;
}

function countUniquePasswords(data) {
  return data.filter(passwords => isUnique(passwords)).length;
}

function countUniquePasswordsAnagram(data) {
  return data
    .map(passwords =>
      passwords
        .map(str => str.split(''))
        .map(password => password.sort())
        .map(item => JSON.stringify(item)))
    .filter(stringyPassword => isUnique(stringyPassword)).length;
}

fs.readFile(filePath, 'utf8', (err, res) => {
  countUniquePasswordsAnagram(parse(res));
  countUniquePasswords(parse(res));
});
