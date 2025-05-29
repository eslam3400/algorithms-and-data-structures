function getTheAverageRevers(avg, count) {
  const sum = avg * count;
  const combinations = [];
  let start = 0;

  for (let i = sum; i > start; i--) {
    if (start + i == sum) combinations.push([start, i]);
    start++;
  }

  return combinations;
}

module.exports = {
  getTheAverageRevers
}