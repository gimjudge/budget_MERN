import React from 'react';

// Fav Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = props => {
    return (
        <div className="finalizing-row row">
            <div className="finalizing-content row-content">
                <div className="finalizing-column column-4">
                    <div className="finalizing-data data center">
                        <button className="trans-cancel" type="button" onClick={ props.cancelButton } >
                            <FontAwesomeIcon icon="times" />
                        </button>
                    </div>
                </div>
                <div className="finalizing-column column-4">
                    <div className="finalizing-data data center">
                        <button className="trans-camera" type="button" onClick={ props.cameraButton } >
                            <FontAwesomeIcon icon="camera" />
                        </button>
                        <input type="file" accept="image/*;capture=camera" ></input>
                    </div>
                </div>
                <div className="finalizing-column column-4">
                    <div className="finalizing-data data center">
                        <button className="trans-submit" type="submit" disabled={!props.formValid}>
                            <FontAwesomeIcon icon="check" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;