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
    const inputRegex = /[^1234567890/*\-+.√()]/;
    const input = event.target.value;
    if (equalsPressed) {
      setSavedInput(displayValue);
      setDisplayValue(input[input.length - 1]);
      setEqualsPressed(false);
    }
    if (!inputRegex.test(input)) {
      setDisplayValue(input);
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setEnterPressed((enterPressed) => enterPressed + 1);
      setEqualsPressed(true);
    }
  };

  return (
    <section className="calculatorContainer">
      <div className="calculatorDisplay">
        <input
          ref={inputRef}
          placeholder="0"
          value={displayValue}
          onKeyDown={handleKeyDown}
          onChange={handleInput}
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
