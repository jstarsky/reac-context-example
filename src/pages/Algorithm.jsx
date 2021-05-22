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
    return n * recFactorial(n - 1);
  };

  return (
    <div id="wizard">
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
          </h3>
          <h4>Factorial of 5: {factorial(5)}</h4>
          <h4>Factorial of 3: {factorial(3)}</h4>
          <h4>Recursive Factorial of 5: {recFactorial(5)}</h4>
          <h4>Recursive Factorial of 3: {recFactorial(3)}</h4>
        </div>
      </div>
    </div>
  );
};

Algorithm.propTypes = {};

export default Algorithm;
