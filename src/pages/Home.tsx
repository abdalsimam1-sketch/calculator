import { useState } from "react";
import { keys, bottomKeys } from "../data/keysData";
import type { ButtonTypes } from "../data/keysData";
type themes = 1 | 2 | 3;
export const Home = () => {
  const [first, setFirst] = useState("");
  const [operator, setOperator] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState<themes>(1);
  const display = (value: string, type: ButtonTypes) => {
    if (type === "number") {
      if (operator === "") {
        setFirst((current) => current + value);
      }
      if (operator.length > 0) {
        setSecond((current) => current + value);
      }
    }
    if (type === "operator") {
      setOperator(value);
    }
  };
  const reset = (type: ButtonTypes, value: string) => {
    if (type === "action" && value === "RESET") {
      setFirst("");
      setOperator("");
      setSecond("");
      setResult("");
    }
  };
  const del = (type: ButtonTypes, value: string) => {
    if (type === "action" && value === "DEL") {
      if (second.length > 0) {
        setSecond((current) => current.slice(0, -1));
      } else if (operator.length > 0) {
        setOperator("");
      } else {
        setFirst((current) => current.slice(0, -1));
      }
    }
  };
  const calculate = (first: string, operator: string, second: string) => {
    setFirst("");
    setOperator("");
    setSecond("");
    let answer;
    if (operator == "+") {
      answer = Number(first) + Number(second);
    }
    if (operator == "/") {
      answer = Number(first) / Number(second);
    }
    if (operator == "x") {
      answer = Number(first) * Number(second);
    }
    if (operator == "-") {
      answer = Number(first) - Number(second);
    }
    setResult(String(answer));
    return answer;
  };

  return (
    <main
      className={`d-flex justify-content-center align-items-center theme-${theme}`}
      style={{ minHeight: "100vh" }}
    >
      <div className=" my-auto p-3 d-flex flex-column gap-4 cal-container">
        <section className="heading-section d-flex justify-content-between align-items-center ">
          <h3>calc</h3>
          <div className="d-flex gap-2 align-items-center">
            <span className="fw-bold" style={{ fontSize: "10px" }}>
              THEMES
            </span>
            <span>
              <i
                className={`btn bi bi-1-square-fill fs-3 p-0`}
                onClick={() => setTheme(1)}
              ></i>
              <i
                className={`btn bi  ${theme} bi-2-square-fill fs-3 p-0`}
                onClick={() => setTheme(2)}
              ></i>
              <i
                className={`btn bi bi-3-square-fill fs-3 p-0`}
                onClick={() => setTheme(3)}
              ></i>
            </span>
          </div>
        </section>
        <section className="input-section rounded p-3 d-flex">
          <h1 className="ms-auto">
            {first.toLocaleString()}
            {operator}
            {second}
            {result}
          </h1>
        </section>
        <section className="buttons-section  rounded p-4">
          <div className="row g-3">
            {keys.map((button) => (
              <div className="col-3" key={button.key}>
                <button
                  className={`btn  mx-auto w-100 p-3 fw-bold text-nowrap shadow button btn-${button.value.toLowerCase()}`}
                  onClick={() => {
                    display(button.value, button.type);
                    del(button.type, button.value);
                  }}
                >
                  {button.value}
                </button>
              </div>
            ))}
            {bottomKeys.map((item) => (
              <div className="col-6" key={item.key}>
                <button
                  className={`w-100 btn p-3 fw-bold shadow  btn-${item.value.toLowerCase()} ${item.value === "RESET" && theme === 1 ? "text-dark" : "text-light"} btn-${item.value === "=" ? "equals" : ""}`}
                  onClick={() => {
                    reset(item.type, item.value);
                    if (first.length > 0 && operator.length > 0) {
                      if (item.type === "action" && item.value === "=") {
                        const answer = calculate(first, operator, second);
                        setFirst(String(answer));
                        setResult("");
                      }
                    }
                  }}
                >
                  {item.value}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
