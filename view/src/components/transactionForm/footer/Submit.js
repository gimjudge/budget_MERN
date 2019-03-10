import React from 'react';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Submit = props => {
    return (
                <div className="finalizing-column column-4">
                    <div className="finalizing-data data center">
                        <button className="trans-submit" type="submit" disabled={!props.formValid}>
                            <FontAwesomeIcon icon="check" />
                        </button>
                    </div>
                </div>
    );
}

export default Submit;