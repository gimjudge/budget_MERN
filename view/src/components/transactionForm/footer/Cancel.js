import React from 'react';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddFooter = props => {
    return (
                <div className="finalizing-column column-4">
                    <div className="finalizing-data data center">
                        <button className="trans-cancel" type="button" onClick={ props.cancelButton } >
                            <FontAwesomeIcon icon="times" />
                        </button>
                    </div>
                </div>
    );
}

export default AddFooter;