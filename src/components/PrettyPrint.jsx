import React, { useEffect, useLayoutEffect, useState } from "react";
const PrettyPrint = ({ toPrint }) => {
  const [In, setIn] = useState("---");

  useEffect(() => {
    let timer = null;

    setIn("Out");

    timer = setTimeout(() => {
      setIn("In");
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [toPrint.counter1, toPrint.counter2]);

  return (
    <div className="prettyPrint">
      <pre title="I animate when counters increment!" className={In}>
        {JSON.stringify(toPrint, null, 2)}
      </pre>
    </div>
  );
};
export default PrettyPrint;
