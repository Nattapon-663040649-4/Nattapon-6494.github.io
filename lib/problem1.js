function validateInput(input) {
  const number = Number(input);
  return Number.isInteger(number) && number > 0;
}

function findPrimes(limit) {
  const primes = []; // ✅ ใช้ array
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i); // ✅ ใช้ push()
  }
  return primes;
}

function displayPrimes(primes, limit) {
  alert(`For n = ${limit} prime numbers are ${primes.join(",")}`);
}

function promptForInput() {
  let input;
  inputLoop: while (true) {
    input = prompt("Enter a positive integer:");
    if (validateInput(input)) break inputLoop;
  }
  const number = parseInt(input);
  const primes = findPrimes(number);
  displayPrimes(primes, number);
}

window.onload = promptForInput;
