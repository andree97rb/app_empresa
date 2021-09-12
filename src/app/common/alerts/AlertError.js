import React from 'react';
import { Alert } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const AlertError = ({ message }) => {
    return (
        <Alert variant="danger">
            <FaTimes/> &nbsp; { message }
        </Alert>
    );
}

export default AlertError;