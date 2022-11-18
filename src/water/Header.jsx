import React from "react";

const Header = ({ data }) => {
  const lUpdate = data.slice(-1)[0];

  return (
    <>
      <div className="headers">
        <h1>Daily Water Consumption Data</h1>
        <h3>
          Last Update : {lUpdate === "aN-aN-NaN" ? "Not Avaliable" : lUpdate}
        </h3>
      </div>
    </>
  );
};

export default Header;
