import React, { Component } from 'react';

class Type extends Component {

    render () {
        return (
            <div className="trans-type-row row">
                <div className={"trans-type-row-content row-content "}>
                    <div className="trans-type-column column-6">
                        <div className="trans-type-data data">
                            <input 
                                id="type-expense"
                                className="trans-expense trans-type-radio" 
                                type="radio" 
                                ref="type" 
                                name="type" 
                                value="expense"
                                checked={this.props.checked === 'expense'} 
                                onChange={ this.props.onChange}
                                required
                            />
                            <label className="trans-expense trans-type-button" htmlFor="type-expense" ><div>Expense</div></label>
                        </div>
                    </div>
                    <div className="transaction-column column-6">
                        <div className="transaction-data data" >
                            <input 
                                id="type-income"
                                className="trans-income trans-type-radio" 
                                type="radio" 
                                ref="type" 
                                name="type" 
                                value="income" 
                                checked={this.props.checked === 'income'} 
                                onChange={this.props.onChange}
                                required 
                            />
                            <label className="btn trans-income trans-type-button" htmlFor="type-income" >Income</label>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Type;