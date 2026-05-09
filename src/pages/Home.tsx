import { useState } from "react";
import { keys } from "../data/keysData";
import { bottomKeys } from "../data/keysData";

export const Home = () => {
  const [first, setFirst] = useState("");
  const [operator, setOperator] = useState("");
  const [second, setSecond] = useState("");
  const display = (value: string, type: string) => {
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
  const reset = (type: string, value: string) => {
    if (type === "action" && value === "RESET") {
      setFirst("");
      setOperator("");
      setSecond("");
    }
  };

  return (
    <main
      className=" d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container card my-auto p-3 d-flex flex-column gap-4">
        <section className="heading-section d-flex justify-content-between align-items-center">
          <h3>calc</h3>
          <div className="d-flex gap-2 align-items-center">
            <span className="fw-bold" style={{ fontSize: "10px" }}>
              THEMES
            </span>
            <span>
              <i className="btn bi bi-1-square-fill fs-3 p-0"></i>
              <i className="btn bi bi-2-square-fill fs-3 p-0"></i>
              <i className="btn bi bi-3-square-fill fs-3 p-0"></i>
            </span>
          </div>
        </section>
        <section className="input-section card p-3 d-flex">
          <h1 className="align-self-end">
            {first}
            {operator}
            {second}
          </h1>
        </section>
        <section className="buttons-section card p-4">
          <div className="row g-3">
            {keys.map((button) => (
              <div className="col-3" key={button.key}>
                <button
                  className="btn btn-outline-dark mx-auto w-100 p-3 fw-bold text-nowrap"
                  onClick={() => {
                    display(button.value, button.type);
                  }}
                >
                  {button.value}
                </button>
              </div>
            ))}
            {bottomKeys.map((item) => (
              <div className="col-6" key={item.key}>
                <button
                  className="w-100 btn btn-outline-dark p-3 fw-bold"
                  onClick={() => reset(item.type, item.value)}
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
