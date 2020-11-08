import React from "react";

function Loader({ show }) {
  return (
    <>
      <div className={`loader ${show ? "In" : "Out"}`}>
        <div className="loader__overlay" />
        <div className="loader__messageBox">
          <div className="loader__image">
            <img src="/images/loader.gif" alt="busy" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
