import React from 'react';

const Merchant = props => {
    return (
        <div className="transaction-row row">
            <div className="transaction-row-content row-content">
                <div className="transaction-column column-4">
                    <div className="transaction-data data">
                        <label htmlFor="merchant">Merchant</label>
                    </div>
                </div>
                <div className="transaction-column column-8">
                    <div className="transaction-data data">
                        <input 
                            className="trans-input" 
                            type="text" 
                            id="merchant"
                            name="merchant" 
                            value={props.value}
                            onChange={props.onChange}
                            placeholder="Merchant" 
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Merchant;