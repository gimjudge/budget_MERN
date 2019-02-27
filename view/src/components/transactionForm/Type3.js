
import React from 'react';
const Type3 = props => (
    <div className="trans-type-row row">
                <div className={"trans-type-row-content row-content "}>
                    <div className="trans-type-column column-6">
                        <div className="trans-type-data data">
                            <button className="trans-expense trans-type-button trans-active-button" >Expense</button>
                            <input 
                                className="trans-expense trans-type-radio" 
                                type="radio" 
                                name="type" 
                                value="expense"
                                checked={props.checked === 'expense'} 
                                onChange={props.onChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="transaction-column column-6">
                        <div className="transaction-data data" >
                            <button className="trans-income trans-type-button">Income</button>
                            <input 
                                className="trans-income trans-type-radio" 
                                type="radio" 
                                name="type" 
                                value="income" 
                                checked={props.checked === 'income'} 
                                onChange={props.onChange}
                                required 
                            />
                        </div>
                    </div>
                </div>
            </div>
)

export default Type3;