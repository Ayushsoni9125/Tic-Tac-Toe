import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div onClick={value ? null : onClick} className="square">
      <h5 className={value === "X" ? "x-style" : "o-style"}>
        {value}
      </h5>
    </div>
  );
};

export default Square;