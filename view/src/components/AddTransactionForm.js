import React, { Component } from 'react';
import axios from 'axios';

// Fav Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            category: '',
            date: '',
            merch: '',
            notes: '',
            type: '',
            tags: ''
        };
    }
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

    handleCancelButton = e => {
        e.preventDefault();
    }
    handleCameraButton = e => {
        e.preventDefault();
        e.target.nextElementSibling.click();
    }
    handleSubmitButton = e => {
        console.log('this');
        //onClick={ this.handleSubmitButton } 
    }
    
    fieldValidation (fieldName, value) {
        switch (fieldName) {
            case 'amount':
            let amount = parseFloat(value);
                if (!isNaN(amount)) { 
                    return amount; 
                } else { 
                    return null;
                }
            case 'date':
                if (typeof(value) === "string") {
                    if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
                        return value;
                    }
                }
                return null;
            default:
                if (typeof(value) === "string") {
                    return value;
                }
                return null;
        }
    }
    fieldIsSet (value) {
        return (value !== undefined);
    }
    handleSubmit = e => {
        e.preventDefault();
        //console.log(this.refs);
        let postJSON = {}
        for (let ref in this.refs) {
            if (ref !== "image" && ref !== "tags")
            if (this.fieldIsSet(this.refs[ref].value)){
                postJSON[ref] = this.fieldValidation(ref, this.refs[ref].value);
            }
            //postJSON[ref] = (this.fieldValidation(this.refs[ref].value)) ? this.refs[ref].value : this.refs[ref].value;
        }
        console.log("before");
        console.log(postJSON);
        console.log("after");
        axios.post('http://localhost:3001/transaction/detail', postJSON)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render () {
        return (
        <form className="transaction-form" onSubmit={this.handleSubmit} method="POST" autoComplete="on">
            <div className="transaction-container container">
                <div className="row">
                    <div className="row-content">
                        <div className="column-12">
                            <div className="data">
                                <h1 className="main-title">Add Transaction</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trans-type-row row" onClick={ this.handleRadioAndButton }>
                    <div className="trans-type-row-content row-content">
                        <div className="trans-type-column column-6">
                            <div className="trans-type-data data">
                                <button className="trans-expense trans-type-button" >Expense</button>
                                <input className="trans-expense trans-type-radio"type="radio" ref="type" name="type" value="0" required />
                            </div>
                        </div>
                        <div className="transaction-column column-6">
                            <div className="transaction-data data" >
                                <button className="trans-income trans-type-button">Income</button>
                                <input className="trans-income trans-type-radio" type="radio" ref="type" name="type" value="1" required />
                            </div>
                        </div>
                    </div>
                </div>
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
                                    name="transaction[amount]" 
                                    placeholder="0.00" 
                                    step="0.01" 
                                    ref="amount" 
                                    required 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                <label htmlFor="transaction-date">Date</label>
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <input className="trans-input" type="date" id="transaction-date" name="transaction[date]" ref="date" required />
                            </div>
                        </div>
                    </div>
                </div>
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
                                name="transaction[merchant]" 
                                placeholder="Merchant" 
                                ref="merchant"
                                required
                            />
                        </div>
                    </div>
                </div>
                </div>
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                <label htmlFor="category">Category</label>
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <select className="trans-input" id="category" name="trans-category" ref="category" required>
                                    <option value="coffee">
                                        coffee
                                    </option>
                                    <option value="gas">
                                        gas
                                    </option>
                                    <option value="groceries">
                                        groceries
                                    </option>
                                    <option value="coffee">
                                        coffee
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                <label htmlFor="tags">Tags</label>
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <input className="trans-input" id="tags" type="text" name="transaction[tags]" placeholder="Tags separated by a comma" ref="tags" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                Notes
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <input className="trans-input" type="text" name="transaction[notes]" placeholder="Notes" ref="notes" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="finalizing-row row">
                    <div className="finalizing-content row-content">
                        <div className="finalizing-column column-4">
                            <div className="finalizing-data data center">
                                <button className="trans-cancel" onClick={ this.handleCancelButton } >
                                    <FontAwesomeIcon icon="times" />
                                </button>
                            </div>
                        </div>
                        <div className="finalizing-column column-4">
                            <div className="finalizing-data data center">
                                <button className="trans-camera" onClick={ this.handleCameraButton } >
                                    <FontAwesomeIcon icon="camera" />
                                </button>
                                <input type="file" accept="image/*;capture=camera" ref="image"></input>
                            </div>
                        </div>
                        <div className="finalizing-column column-4">
                            <div className="finalizing-data data center">
                                <button className="trans-submit">
                                    <FontAwesomeIcon icon="check" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
  }
}

export default AddTransaction;
      