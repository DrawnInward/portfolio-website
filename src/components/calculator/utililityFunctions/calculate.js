import { BigNumber } from "bignumber.js";

export const calculate = (arr) => {
  return arr.reduce((acc, item, index) => {
    if (item === "e") {
      return acc + arr.slice(index).join("");
    } else if (!isNaN(item)) {
      const bigNumberAcc = new BigNumber(acc);
      const bigNumberItem = new BigNumber(item);
      return operatorLookup[arr[index - 1]](bigNumberAcc, bigNumberItem);
    } else {
      return acc;
    }
  });
};

const operatorLookup = {
  "+": (a, b) => a.plus(b),
  "-": (a, b) => a.minus(b),
  "*": (a, b) => a.times(b),
  "/": (a, b) => a.dividedBy(b),
  "%": (a, b) => a.modulo(b),
  "^": (a, b) => a.pow(b),
};

export const calculateParenthesis = (str) => {
  const parenthesisRegex = /\(([^()]+)\)/; // matches anything that is not parenthesis enclosed in parenthesis.
  if (str.match(parenthesisRegex) === null) {
    return str;
  } else {
    const innermostParenthesisArr = str.match(parenthesisRegex);
    let parenthesisStr = innermostParenthesisArr[1];
    parenthesisStr = calculateNthrt(parenthesisStr);
    parenthesisStr = calculateExponents(parenthesisStr);
    parenthesisStr = calculateDivisionAndMultiplication(parenthesisStr);
    console.log(parenthesisStr, "parenthesisStr2");
    const withinInnermostParenthesisArr =
      parenthesisStr.match(/\d+(\.\d+)?|[/*+%-^]/g); // matches atleast 1 digit that can be followed by a decimal and at least one additional digit OR an operator
    const sumOfInnermostParenthesis = calculate(withinInnermostParenthesisArr);
    const newStr = str.replace(
      innermostParenthesisArr[0],
      sumOfInnermostParenthesis.toString()
    );
    return calculateParenthesis(newStr);
  }
};

export const calculateNthrt = (str) => {
  const nthrtRegex = /√(\d+(\.\d+)?)/g;
  console.log(str.match(nthrtRegex), "STRING!!!");
  str = str.replace(nthrtRegex, (match, base) =>
    new BigNumber(base).squareRoot().toString()
  );
  return str;
};

export const calculateExponents = (str) => {
  const exponentRegex = /(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g;
  str = str.replace(exponentRegex, (match, base, _, exponent) =>
    new BigNumber(base).pow(new BigNumber(exponent)).toString()
  );
  return str;
};

export const calculateDivisionAndMultiplication = (str) => {
  const DivisionAndMultiplication = /(\d+(\.\d+)?)([/*])(\d+(\.\d+)?)/;
  str = str.replace(
    DivisionAndMultiplication,
    (match, num1, _, operator, num2) => {
      const result =
        operator === "*"
          ? new BigNumber(num1).times(new BigNumber(num2))
          : new BigNumber(num1).div(new BigNumber(num2));
      return result.toString();
    }
  );
  return str;
};
