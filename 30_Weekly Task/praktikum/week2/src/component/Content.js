import React from "react";

export const Content = ({ title, desc, img }) => {
  return (
    <div>
      <h1 style={{ textTransform: "UPPERCASE" }}>{title}</h1>
      <p>{desc}</p>
      <img src={img} alt={img} style={{ width: "100%" }} />
    </div>
  );
};
