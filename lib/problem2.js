function isPositiveInteger(input) {
  const number = Number(input);
  return Number.isInteger(number) && number > 0;
}

function isNegativeInteger(input) {
  const number = Number(input);
  return Number.isInteger(number) && number < 0;
}

function readInput() {
  const list = [];

  while (true) {
    let input = prompt("Enter a positive integer (negative to finish):");

    if (isNegativeInteger(input)) {
      break;
    } else if (isPositiveInteger(input)) {
      list.push(Number(input));
    } else {
      alert("Invalid input. Please enter a positive integer.");
    }
  }

  return list;
}

function displayStats(list) {
  const average = list.length > 0
    ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2)
    : "0.00";

  const min = list.length > 0 ? Math.min(...list) : 0;
  const max = list.length > 0 ? Math.max(...list) : 0;

  const message = list.length > 0
    ? `For the list ${list.join(",")}, the average is ${average}, the minimum is ${min}, and the maximum is ${max}`
    : `For the list, the average is 0.00, the minimum is 0, and the maximum is 0`;

  alert(message);
}

// Run immediately on load
const list = readInput();
displayStats(list);
