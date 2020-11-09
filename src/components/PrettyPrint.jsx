import React, { useEffect, useRef, useState } from "react";

import DataTable from "./DataTable";

const PrettyPrint = ({ toPrint }) => {
  const [In, setIn] = useState("Out");

  useEffect(() => {
    let timer = null;

    setIn("Out");

    timer = setTimeout(() => {
      setIn("In");
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [toPrint.counter1, toPrint.counter2, toPrint.chuckNorris]);

  return (
    <div className="prettyPrint">
      <main title="I animate when state changes!" className={In}>
        {DataTable(toPrint, Object.keys(toPrint))}
      </main>
    </div>
  );
};
export default PrettyPrint;
