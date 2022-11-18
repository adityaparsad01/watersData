import React from "react";

const Main = ({ time }) => {
  time.reverse();
  return (
    <>
      <div className="drop-down">
        <label htmlFor="cars">Choose a Date:</label>
        <select name="cars" id="cars">
          {time.map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Main;
