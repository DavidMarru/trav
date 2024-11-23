import PropTypes from "prop-types";
import React from "react";
import './Buttons.css';

const FullButton = ({ ButtonText }) => {
    return (
        <div className= 'full-button'>
            <div className="text-wrapper-B">{ButtonText}</div>
        </div>
    );
};

FullButton.propTypes = {
    name: PropTypes.string,
};

export default FullButton;
