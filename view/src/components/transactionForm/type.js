import React from 'react';

const Type = props => {
    return (
        <div className="trans-type-row row" onClick={ this.handleRadioAndButton }>
            <div className={"trans-type-row-content row-content " + this.state.type }>
                <div className="trans-type-column column-6">
                    <div className="trans-type-data data">
                        <button className="trans-expense trans-type-button trans-active-button" >Expense</button>
                        <input 
                            className="trans-expense trans-type-radio" 
                            type="radio" 
                            ref="type" 
                            name="type" 
                            value="expense"
                            checked={this.state.formVariables.type === 'expense'} 
                            onChange={(event) => this.handleUserInput(event)}
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
                            ref="type" 
                            name="type" 
                            value="income" 
                            checked={this.state.formVariables.type === 'income'} 
                            onChange={(event) => this.handleUserInput(event)}
                            required 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Type;