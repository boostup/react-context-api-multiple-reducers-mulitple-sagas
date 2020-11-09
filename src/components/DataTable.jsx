import React from "react";

export default function DataTable(obj, array) {
  // console.log(obj);
  //object => table
  //scalar => string
  return (
    <table>
      <tbody>
        {array.map((prop) => {
          return (
            <tr key={prop}>
              <th>{prop}</th>
              <td>
                {obj[prop] instanceof Object
                  ? DataTable(obj[prop], Object.keys(obj[prop]))
                  : `${obj[prop]}`}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
