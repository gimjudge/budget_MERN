import React from 'react';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Camera = props => {
    return (
                <div className="finalizing-column column-4">
                    <div className="finalizing-data data center">
                        <button className="trans-camera" type="button" onClick={ props.cameraButton } >
                            <FontAwesomeIcon icon="camera" />
                        </button>
                        <input type="file" accept="image/*;capture=camera" ></input>
                    </div>
                </div>
    );
}

export default Camera;