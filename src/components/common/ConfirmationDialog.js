import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapModal } from './BootstrapModal';

export const ConfirmationDialog = props => {

    const { handleClose, showModal, successCallback, message } = props;

    return (
        <BootstrapModal
            handleClose={handleClose}
            showModal={showModal}
            heading="Confirmation">
            <div className="modal-body">
                <p>{ message }</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                    No
                </button>
                <button type="button" className="btn btn-primary" onClick={successCallback}>
                    Yes
                </button>
            </div>
        </BootstrapModal>
    );
};

ConfirmationDialog.propTypes = {
    handleClose: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    successCallback: PropTypes.func.isRequired,
    message: PropTypes.string
};