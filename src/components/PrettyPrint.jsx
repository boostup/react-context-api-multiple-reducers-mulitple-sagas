import React, { useEffect, useState } from "react";

import DataTable from "./DataTable";

const PrettyPrint = ({ toPrint }) => {
  const [In, setIn] = useState("In");

  useEffect(() => {
    setIn((In) => (In === "In" ? "Out" : "In"));
  }, [toPrint.ui.isWorking]);

  return (
    <div className="prettyPrint">
      <main title="I animate when state changes!" className={In}>
        {DataTable(toPrint, Object.keys(toPrint))}
      </main>
    </div>
  );
};
export default PrettyPrint;
