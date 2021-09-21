import React, { useState } from "react";
import TechSelectOption from "../tech/TechSelectOption";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter all fields!" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLog(newLog);
      M.toast({ html: `Log add by ${tech}` });

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
              <TechSelectOption />
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
AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
export default connect(null, { addLog })(AddLogModal);
