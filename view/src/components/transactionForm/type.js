import React, { Component } from 'react';

class Type extends Component {

    /*
        Handles the Transaction type Radio Button and Button
    */
    handleRadioAndButton = e => {
        let buttons = document.getElementsByClassName("trans-type-button");
        for (let i=0; i < buttons.length; i++) {
            buttons[i].classList.remove("trans-active-button");
        }
        if (e.target.tagName === "BUTTON") {
            e.preventDefault();
            e.target.classList.add("trans-active-button");
            e.target.nextElementSibling.checked = true;
        } else if (e.target.tagName === "INPUT") {
            e.target.previousElementSibling.classList.add("trans-active-button");
        }
    }

    render () {
        return (
            <div className="trans-type-row row" onClick={ this.handleRadioAndButton }>
                <div className={"trans-type-row-content row-content "}>
                    <div className="trans-type-column column-6">
                        <div className="trans-type-data data">
                            <button className="trans-expense trans-type-button trans-active-button" >Expense</button>
                            <input 
                                className="trans-expense trans-type-radio" 
                                type="radio" 
                                ref="type" 
                                name="type" 
                                value="expense"
                                checked={this.props.checked === 'expense'} 
                                onChange={ this.props.onChange}
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
                                checked={this.props.checked === 'income'} 
                                onChange={this.props.onChange}
                                required 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

/*
//this functions, sort of
import React from 'react';
const Type = props => (
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
)*/

export default Type;