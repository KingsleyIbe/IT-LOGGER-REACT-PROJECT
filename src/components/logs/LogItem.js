import React from 'react'
import PropTypes from 'prop-types'
import Moment from "react-moment";

const LogItem = ({ log }) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 
                'blue-text'}`}>{log.message}
                </a>
                <br/>
                <span className='grey-text'>
                    <span className="black-text">{log.techs}</span>
                </span>

            </div>
            
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,

}

export default LogItem
