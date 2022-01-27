const warmupExercises = require('./data/warmup.js');
const stringExercises = require('./data/string.js');
const recursionExercises = require('./data/recursion.js');
const logicExercises = require('./data/logic.js');
const arrayExcercies = require('./data/array.js');
const apExcercises = require('./data/ap.js');
const mapExercises = require('./data/map.js');

const mainPageExercises = [...warmupExercises, ...stringExercises,
  ...logicExercises, ...arrayExcercies,
  ...recursionExercises, ...apExcercises,
  ...mapExercises];

module.exports = mainPageExercises;
