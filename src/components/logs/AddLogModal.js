import React, { useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';


const AddLogModal = () => {
  const onSubmit = () => {
      if(message === '' || tech === '') {
          M.toast({html: 'Please enter all fields!'})
      }else{
          console.log({ message, tech, attention });
          setMessage("");
          setTech("");
          setAttention(false);
      }
  };

  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technical
              </option>
              <option value="John Smith">John Smith</option>
              <option value="Emmanuel Gbenga">Emmanuel Gbenga</option>
              <option value="Sarah Wilson">Sarah Wilson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs attention!</span>
              </label>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-green btn-flat"
          >
            {" "}
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
export default AddLogModal;
