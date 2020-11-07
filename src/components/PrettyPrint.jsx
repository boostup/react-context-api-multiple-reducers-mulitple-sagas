import React from "react";
const PrettyPrint = ({ toPrint }) => (
  <pre>{JSON.stringify(toPrint, null, 2)}</pre>
);
export default PrettyPrint;
