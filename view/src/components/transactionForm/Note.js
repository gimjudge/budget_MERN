import React from 'react';

const Note = props => {
    return (
        <div className="transaction-row row">
            <div className="transaction-row-content row-content">
                <div className="transaction-column column-4">
                    <div className="transaction-data data">
                        Note
                    </div>
                </div>
                <div className="transaction-column column-8">
                    <div className="transaction-data data">
                        <input 
                            className="trans-input" 
                            type="text" 
                            name="note"
                            value={props.value}
                            onChange={props.onChange}
                            placeholder="Note"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Note;