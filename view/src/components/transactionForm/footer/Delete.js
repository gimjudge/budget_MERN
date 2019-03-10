import React from 'react';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Delete = props => {
    return (
                <div className="finalizing-column column-4">
                    <div className="finalizing-data data center">
                        <button className="trans-delete" type="button" onClick={ props.deleteButton } >
                            <FontAwesomeIcon icon="trash" />
                        </button>
                    </div>
                </div>
    );
}

export default Delete;