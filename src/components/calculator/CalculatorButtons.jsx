import { useEffect, useState } from "react";
import { BigNumber } from "bignumber.js";
import {
  calculate,
  calculateDivisionAndMultiplication,
  calculateExponents,
  calculateNthrt,
  calculateParenthesis,
} from "./utililityFunctions/calculate";

/* Things to add 
render scientific buttons when in pedmas mode
move pi to above section
get the memory working
*/

const CalculatorButtons = ({
  displayValue,
  setDisplayValue,
  isPedmas,
  equalsPressed,
  setEqualsPressed,
  enterPressed,
  setSavedInput,
}) => {
  useEffect(() => {
    if (enterPressed > 0 && displayValue) {
      handleEquals();
    }
  }, [enterPressed]);

  const handleNumber = (num) => {
    if (equalsPressed) {
      setSavedInput(displayValue);
      setDisplayValue(num);
      setEqualsPressed(false);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperator = (op) => {
    setDisplayValue(displayValue + op);
    setEqualsPressed(false);
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const handleEquals = () => {
    const result = calculateResult();
    setDisplayValue(result);
    setEqualsPressed(true);
  };
  console.log(displayValue);

  const calculateResult = () => {
    let resultStr = calculateParenthesis(displayValue);
    if (isPedmas) {
      resultStr = calculateNthrt(resultStr);
      resultStr = calculateExponents(resultStr);
      resultStr = calculateDivisionAndMultiplication(resultStr);
    }
    const resultArr = resultStr.match(/\d+(\.\d+)?|[/*+%-^e√]/g); // matches atleast 1 digit that can be followed by a decimal and at least one additional digit OR an operator
    const toNumbers = resultArr.map((string) => {
      return /[-/*+%()^e√]/.test(string) ? string : new BigNumber(string);
    });
    return calculate(toNumbers).toString();
  };

  return (
    <section className="calculatorGrid">
      <button
        className="calculatorButton"
        id="cancelButton"
        onClick={() => {
          handleClear();
        }}
      >
        C
      </button>
      <button
        id="operatorButton"
        className="calculatorButton"
        onClick={() => {
          handleNumber("(");
        }}
      >
        (
      </button>
      <button
        id="operatorButton"
        className="calculatorButton"
        onClick={() => {
          handleNumber(")");
        }}
      >
        )
      </button>
      <button
        id="operatorButton"
        className="calculatorButton"
        onClick={() => {
          handleOperator("/");
        }}
      >
        /
      </button>

      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("7");
        }}
      >
        7
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("8");
        }}
      >
        8
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("9");
        }}
      >
        9
      </button>
      <button
        id="bigOperatorButton"
        className="calculatorButton"
        onClick={() => {
          handleOperator("-");
        }}
      >
        -
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("4");
        }}
      >
        4
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("5");
        }}
      >
        5
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("6");
        }}
      >
        6
      </button>
      <button
        id="bigOperatorButton"
        className="calculatorButton"
        onClick={() => {
          handleOperator("+");
        }}
      >
        +
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("1");
        }}
      >
        1
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("2");
        }}
      >
        2
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("3");
        }}
      >
        3
      </button>
      <button
        id="bigOperatorButton"
        className="calculatorButton"
        onClick={() => {
          handleOperator("*");
        }}
      >
        x
      </button>
      <button
        id="bigOperatorButton"
        className="calculatorButton"
        onClick={() => {
          handleOperator("%");
        }}
      >
        m
      </button>
      <button
        className="calculatorButton"
        onClick={() => {
          handleNumber("0");
        }}
      >
        0
      </button>
      <button
        id="bigOperatorButton"
        className="calculatorButton"
        onClick={() => {
          handleNumber(".");
        }}
      >
        .
      </button>
      <button
        id="equalsButton"
        className="calculatorButton"
        onClick={() => {
          handleEquals();
        }}
      >
        =
      </button>

      {isPedmas && (
        <>
          <button
            id="scientificButton"
            className="calculatorButton"
            onClick={() => {
              handleOperator("^");
            }}
          >
            ^
          </button>
          <button
            id="scientificButton"
            className="calculatorButton"
            onClick={() => handleOperator("√")}
          >
            √
          </button>
          <button
            id="scientificButton"
            className="calculatorButton"
            onClick={() => handleScientificOperation("sqrt")}
          >
            STO
          </button>
          <button
            id="scientificButton"
            className="calculatorButton"
            onClick={() => handleScientificOperation("sqrt")}
          >
            REC
          </button>
          <button
            id="scientificButton"
            className="calculatorButton"
            onClick={() => handleScientificOperation("cos")}
          >
            cos
          </button>
          <button
            id="scientificButton"
            className="calculatorButton"
            onClick={() => handleScientificOperation("tan")}
          >
            tan
          </button>
          <button
            id="scientificButton"
            className="calculatorButton"
            onClick={() => handleScientificOperation("log")}
          >
            log
          </button>
          <button
            id="scientificButton"
            className="calculatorButton"
            onClick={() => handleScientificOperation("sin")}
          >
            sin
          </button>
          {/* Add more scientific function buttons as needed */}
        </>
      )}
    </section>
  );
};

export default CalculatorButtons;
