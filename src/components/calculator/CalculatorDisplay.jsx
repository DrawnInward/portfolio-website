import CalculatorButtons from "./CalculatorButtons";
import { useEffect, useRef, useState } from "react";

const CalculatorDisplay = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [isPedmas, setIsPedmas] = useState(false);
  const [equalsPressed, setEqualsPressed] = useState(false);
  const [enterPressed, setEnterPressed] = useState(0);
  const [savedInput, setSavedInput] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const handleInput = (event) => {
    const inputRegex = /[1234567890/*\-+.√()]/;
    const lastInput = event.key;
    console.log(event.key, "last input?");
    if (event.key === "Enter") {
      setEnterPressed((enterPressed) => enterPressed + 1);
      setEqualsPressed(true);
    }
    if (event.key === "Backspace") {
      setDisplayValue((currentDisplayValue) =>
        currentDisplayValue.slice(0, -1)
      );
    }
    if (/[*\-+√]/) {
      setEqualsPressed(false);
    }
    if (equalsPressed && /\d/.test(lastInput)) {
      setSavedInput(displayValue);
      setDisplayValue(lastInput);
      setEqualsPressed(false);
    } else if (inputRegex.test(lastInput)) {
      setDisplayValue((currentDisplayValue) => currentDisplayValue + lastInput);
    }
  };

  const inputRef = useRef();

  useEffect(() => {
    if (!isMobile) {
      inputRef.current.focus();
    }
  }, [isMobile, displayValue]);

  const handleBlur = () => {
    if (!isMobile) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 10);
    }
  };

  console.log(enterPressed, "enterpressed");
  console.log(equalsPressed, "equalpressed");

  const handleKeyDown = (event) => {};

  return (
    <section className="calculatorContainer">
      <div className="calculatorDisplay">
        <input
          ref={inputRef}
          placeholder="0"
          value={displayValue}
          onKeyDown={handleInput}
          type="text"
          onBlur={handleBlur}
        />
      </div>
      <CalculatorButtons
        setDisplayValue={setDisplayValue}
        displayValue={displayValue}
        isPedmas={isPedmas}
        equalsPressed={equalsPressed}
        setEqualsPressed={setEqualsPressed}
        enterPressed={enterPressed}
        setSavedInput={setSavedInput}
      />
      <button className="pedmasButton" onClick={() => setIsPedmas(!isPedmas)}>
        Scientific Mode
      </button>
    </section>
  );
};

export default CalculatorDisplay;
