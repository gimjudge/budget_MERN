import React from 'react';

const Amount = props => {
    return (
        <div>
            <div className="transaction-row trans-row-amount-title row">
                <div className="transaction-row-content row-content">
                    <div className="transaction-column column-12">
                        <div className="transaction-data data">
                            <label htmlFor="amount">Amount</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trans-row-amount row">
                <div className="transaction-row-content row-content">
                    <div className="transaction-column column-12">
                        <div className="transaction-data data">
                            <input 
                                className="trans-input trans-input-amount" 
                                type="number" 
                                id="amount" 
                                name="amount"
                                value={props.value}
                                onChange={ props.onChange}
                                placeholder="0.00" 
                                step="0.01" 
                                required 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Amount;