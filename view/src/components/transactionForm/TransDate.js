
import React from 'react';

const TransDate = props => {
    return (
        <div className="transaction-row row">
            <div className="transaction-row-content row-content">
                <div className="transaction-column column-4">
                    <div className="transaction-data data">
                        <label htmlFor="transaction-date">Date</label>
                    </div>
                </div>
                <div className={"transaction-column column-8 "}>
                    <div className={"transaction-data data "}>
                        <input 
                            className={"trans-input "} 
                            type="date" 
                            id="date" 
                            name="date"
                            value={props.value}
                            onChange={props.onChange}
                            required 
                        /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransDate;                