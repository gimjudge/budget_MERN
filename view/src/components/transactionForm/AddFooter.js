import React from 'react';

import Submit from './footer/Submit';

const AddFooter = props => {
    return (
        <div className="finalizing-row row">
            <div className="finalizing-content-single row-content">
                <Submit formValid={props.formValid} />
            </div>
        </div>
    );
}

export default AddFooter;