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
    </div>
  );
};

Algorithm.propTypes = {};

export default Algorithm;
