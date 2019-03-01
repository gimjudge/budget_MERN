import React from 'react';

// Components
import DisplayRow from './viewTransaction/DisplayRow';

const DisplayTransaction = props => {
    return (
        <div>
            {
                props.displayFields.map((field, key) => {
                    return (
                        <DisplayRow 
                            key={key}
                            name={field}
                            value={props.fields[field]} 
                        />
                    )
                })
            }
        </div>
    );
}

export default DisplayTransaction;