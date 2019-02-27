
import React from 'react';

const Tags = props => {
    return (
        <div className="transaction-row row">
            <div className="transaction-row-content row-content">
                <div className="transaction-column column-4">
                    <div className="transaction-data data">
                        <label htmlFor="tags">Tags</label>
                    </div>
                </div>
                <div className="transaction-column column-8">
                    <div className="transaction-data data">
                        <input 
                            className="trans-input" 
                            id="tags" 
                            type="text" 
                            name="tags"
                            value={props.value}
                            onChange={props.onChange}
                            placeholder="Tags separated by a comma" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tags;