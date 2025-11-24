const fs = require('fs').promises;
const path = require('path');

function getFilePath(filename) {
  return path.join(__dirname, '..', 'data', filename);
}

async function readJSON(filename) {
  try {
    const data = await fs.readFile(getFilePath(filename), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeJSON(filename, data) {
  await fs.writeFile(getFilePath(filename), JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = {
  readJSON,
  writeJSON
};