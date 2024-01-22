import React from "react";
import ReactDOM  from "react-dom/client";

const root=ReactDOM.createRoot(document.querySelector(".root"));
const parent=React.createElement("div",{},"Namaste React");
root.render(parent);
