import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && <Modal showprop={setShow} />}
    </div>
  );
};

function Modal({ showprop }) {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={() => showprop(false)}>
        <button className="modal-close" onClick={() => showprop(false)}>
          Close
        </button>
        <p>This is the content of the modal.</p>
      </div>
    </div>
  );
}

export default App;
