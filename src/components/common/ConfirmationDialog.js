import React from 'react';

export const ConfirmationDialog = props => {

    const { handleClose, showModal, successCallback, message } = props;

    if (showModal)
        return (
            <div className="modal show" style={{ display: 'block', paddingRight: '15px'}} tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmation</h5>
                            <button type="button" className="close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
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
                    </div>
                </div>
            </div>
        );
    else
        return <div/>;
};