import React from 'react';

const DisplayRow = props => {
    return (
        <div className="row">
            <div className="row-content">
                <div className="column-6">
                    <div className="data">
                        {props.name.replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                </div>
                <div className="column-6">
                    <div className="data">
                        {props.value}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayRow;