import React from "react";

function Loader({ show }) {
  console.log(show);
  return (
    <>
      {show ? (
        <div className="loader">
          <div className="loader__overlay" />
          <div className="loader__messageBox">
            <div className="loader__image">
              <img src="/images/loader.gif" alt="busy" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Loader;
