import "./Redix-Counter.css";
import { useState } from "react";

function redixCounter() {
  const [value, setValue] = useState(0);
  const minusClicked = () => {
    console.log("Minus Clicked");
    if (value <= 0) {
      setValue(4095);
    } else {
      setValue((prev) => prev - 1);
    }
  };
  const resetClicked = () => {
    console.log("reset Clicked");
     setValue(0);
  };
  const plusClicked = () => {
    console.log("plus Clicked");
    if (value >= 4095) {
      setValue(0);
    } else {
      setValue((prev) => prev + 1);
    }
  };

  return (
    <div className="redix-counter-container">
      <div
        className="redix-counter-title border border-2 rounded-3
                               border-black p-3 m-auto mt-5"
        style={{ width: "400px" }}
      >
        <div className="text-center fw-bold fs-4">Redix Counter</div>

        <div className="d-flex justify-content-between mt-3">
          <div className="text-center">
            <div className="fw-bold">[HEX] </div>
            <div className="font-monospace">
              {" "}
              {value.toString(16).toUpperCase().padStart(3, "0")}
            </div>
          </div>
          <div className="text-center">
            <div className="fw-bold">[DEC] </div>
            <div className="font-monospace text-primary fw-bold">
              {value.toString().padStart(4, "0")}
            </div>
          </div>
          <div className="text-center">
            <div className="fw-bold">[OCT] </div>
            <div className="font-monospace">
              {value.toString(8).padStart(4, "0")}
            </div>
          </div>
          <div className="text-center">
            <div className="fw-bold">[BIN] </div>
            <div className="font-monospace">
              {" "}
              {value.toString(2).padStart(12, "0")}
            </div>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-around">
          <button className="btn btn-danger px-4" onClick={minusClicked}>
            &minus;
          </button>
          <button className="btn btn-secondary px-4" onClick={resetClicked}>
            RESET
          </button>
          <button className="btn btn-success px-4" onClick={plusClicked}>
            +
          </button>
        </div>
      </div>
      <p className="text-center mt-3 fw-bold">65063803 นางสาวจุฑาทิพย์ บุญใจ</p>
    </div>
  );
}

export default redixCounter;
