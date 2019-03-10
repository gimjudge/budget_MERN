import React from 'react';

import Cancel from './footer/Cancel';
import Submit from './footer/Submit';

const AddFooter = props => {
    return (
        <div className="finalizing-row row">
            <div className="finalizing-content row-content">
                <Cancel onClick={ props.cancelButton } />
                <Submit formValid={props.formValid} />
            </div>
        </div>
    );
}

export default AddFooter;