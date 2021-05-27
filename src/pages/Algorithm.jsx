import React from "react";
// import PropTypes from 'prop-types'

const Algorithm = () => {
  const factorial = (n) => {
    let factorial = 1;
    let counter = n;
    while (counter > 0) {
      factorial = factorial * counter;
      counter -= 1;
    }
    return factorial;
  };

  const recFactorial = (n) => {
    if (n === 0) return 1;
    return recFactorial(n - 1) * n;
  };

  const recSumCounter = (n) => {
    if (n < 1) {
      return n;
    } else {
      return recSumCounter(n - 1) + n;
    }
  };

  const recSum = (arr, n) => {
    if (n < 1) {
      return 0;
    } else if (arr.length <= n) {
      return recSum(arr, arr.length - 1) + arr[arr.length - 1];
    } else {
      return recSum(arr, n - 1) + arr[n - 1];
    }
  };

  const recMath = (arr, n) => {
    if (n <= 0) {
      return 1;
    } else if (arr.length <= n) {
      return recMath(arr, arr.length - 1) * arr[arr.length - 1];
    } else {
      return recMath(arr, n - 1) * arr[n - 1];
    }
  };

  const convertToF = (celsius) => {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  };

  const recursiveReverseString = (str, index) => {
    if (typeof index === "undefined") index = 0;
    if (index === str.length - 1) {
      return str[index];
    }
    return recursiveReverseString(str, index + 1) + str[index];
  };

  const reverseString = (str) => {
    let reverseStr = "";
    let counter = str.length;

    while (0 < counter) {
      counter--;
      reverseStr = reverseStr + str[counter];
    }
    return reverseStr;
  };

  const factorialize = (num) => {
    if (num < 1) {
      return 1;
    }
    return factorialize(num - 1) * num;
  };

  const findLongestWordLength = (str, index) => {
    if (typeof index === "undefined") index = 0;
    const arr = str.split(" ");
    if (index === arr.length - 1) {
      return arr[index].length;
    }
    return findLongestWordLength(str, index + 1) < arr[index].length
      ? arr[index].length
      : findLongestWordLength(str, index + 1);
  };

  const largestOfFour = (arr) => {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largeNumber = arr[i][0];
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largeNumber) {
          largeNumber = arr[i][j];
        }
      }
      results.push(largeNumber);
    }
    return results;
  };

  return (
    <div id="algorithm">
      <div style={{ paddingLeft: "5rem" }}>
        <h2>Algorithm</h2>
      </div>
      <div style={{ padding: "0 5rem" }}>
        <div style={{ borderStyle: "solid", padding: "1rem" }}>
          <h3>
            {`Calculate the factorial of a number `}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Factorial"
            >
              {`Link Wikipedia`}
            </a>
            example 5! =5 * 4 * 3 * 2 * 1= 120
          </h3>
          <h4>Factorial of 5: {factorial(5)}</h4>
          <h4>Factorial of 3: {factorial(3)}</h4>
          <h4>Recursive Factorial of 5: {recFactorial(5)}</h4>
          <h4>Recursive Factorial of 3: {recFactorial(3)}</h4>
        </div>
      </div>
      <div style={{ padding: "2rem 5rem" }}>
        <div style={{ borderStyle: "solid", padding: "1rem" }}>
          <h3>Calculate recursive loops. function (counter)</h3>
          <h4>Recursive SumCounter of 0: {recSumCounter(0)}</h4>
          <h4>Recursive SumCounter of 2: {recSumCounter(2)}</h4>
          <h4>Recursive SumCounter of 5: {recSumCounter(5)}</h4>
          <h4>Recursive Sum of ([1], 0): {recSum([1], 0)}</h4>
          <h3>Calculate recursive loops. function (array, index)</h3>
          <h4>Recursive Sum ([2, 3, 4], 1): {recSum([2, 3, 4], 1)}</h4>
          <h4>Recursive Sum ([2, 3, 4, 5], 3): {recSum([2, 3, 4, 5], 3)}</h4>
          <h4>Recursive Sum of ([1], 0): {recMath([1], 0)}</h4>
          <h4>Recursive Sum ([2, 3, 4], 1): {recMath([2, 3, 4], 1)}</h4>
          <h4>Recursive Mult ([2, 3, 4, 5], 3): {recMath([2, 3, 4, 5], 3)}</h4>
        </div>
      </div>
      <div style={{ padding: "2rem 5rem" }}>
        <div style={{ borderStyle: "solid", padding: "1rem" }}>
          <h3>Calculate recursive loops. function (counter)</h3>
          <h4>Convert Celsius to Fahrenheit 30 : {convertToF(30)}</h4>
          <h4>Reverse a String "hello" : {reverseString("hello")}</h4>
          <h4>
            Reverse a String "javascript":{" "}
            {recursiveReverseString("javascript")}
          </h4>
          <h4>Factorialize a Number: {factorialize(5)}</h4>
          <h4>
            Find the Longest Word in a StringPassed: ("The quick brown fox
            jumped over the lazy dog") :
            {findLongestWordLength(
              "The quick brown fox jumped over the lazy dog"
            )}
          </h4>
          <h4>
            Return Largest Numbers in Arrays :[ [4, 5, 1, 3], [13, 27, 18, 26],
            [32, 35, 37, 39], [1000, 1001, 857, 1], ] ;
            {largestOfFour([
              [4, 5, 1, 3],
              [13, 27, 18, 26],
              [32, 35, 37, 39],
              [1000, 1001, 857, 1],
            ])}
          </h4>
        </div>
      </div>
    </div>
  );
};

Algorithm.propTypes = {};

export default Algorithm;
