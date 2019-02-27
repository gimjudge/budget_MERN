import React, { Component } from 'react';
//import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Fav Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddTransaction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formVariables: {
                type: "expense",
                amount: 0.00,
                date: "2018-02-26",
                merchant: '',
                category: 'gas'
            },
            fieldValid: {
                amount: false,
                category: false,
                date: false,
                merchant: false,
                type: false
            },
            formResponse: '',
            formValid: false,
            toDetailed: false,
            detailID: ''
        };
    }

    componentDidMount() {
        for (let name in this.state.fieldValid) {
            this.fieldValidation(name, this.state.formVariables[name]);
        }
    }

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
    
    /*
        Handles the cancel Button, Perhaps make this a reset button?
    */
    handleCancelButton = e => {
        e.preventDefault();
    }

    /*
        Handle the Camera button
    */
    handleCameraButton = e => {
        e.preventDefault();
        e.target.nextElementSibling.click();
    }

    /*
        Handle Submit
    */
    handleSubmitButton = e => {
        console.log('this');
        //onClick={ this.handleSubmitButton } 
    }

    /*
        Field Validation
        Expects String, String
    */
    isFieldValid (fieldName, value) {
        switch (fieldName) {
            case 'amount':
                let amount = parseFloat(value);
                if (!isNaN(amount) && amount !== 0) {
                    return true;
                } else { 
                    return false;
                }
            case 'date':
                if (typeof(value) === "string") {
                    if (value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            case 'category':
            case 'merchant':
                if (typeof(value) === "string" && value !== "") {
                    return true;
                } else {
                    return false;
                }
            case 'type':
                if (value === "expense" || value === "income") {
                    return true;
                } else {
                    return false;
                }
            default:
                if (typeof(value) === "string") {
                    return true;
                } else {
                    return false;
                }
        }
    }

    /*
        Field Validation
        Expects String, boolean
    */
    fieldValidation (fieldName, value) {
        this.setState((prevState)=>({
            fieldValid:{
                ...prevState.fieldValid,
                [fieldName]: this.isFieldValid(fieldName, value)
            }
        }), () => { this.formValidation() });
    }

    /*
        Form Validation
        sets state to true or false
    */
    formValidation() {
        let result = true;
        for (let index in this.state.fieldValid) {
            if (this.state.fieldValid[index] !== true) {
                result = false;
                break;
            }
        }
        this.setState({formValid: result});
    }

    /*
        Set valid class
        Expects String
        (To be implimented later)
    */
    errorField (fieldName) {
        if (this.state.formValid[fieldName]) {
            return 'trans-field-valid';
        } else {
            return 'trans-field-invalid';
        }
    }

    /*
        Field is Set
    */
    fieldIsSet (value) {
        return (value !== undefined);
    }

    /*
        On Change user inputs
    */
    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        /*
        */
        this.setState(prevState => ({
            formVariables: {
                ...prevState.formVariables,
                [name]: value
            }
        }),() => { this.fieldValidation(name, value) }
        );
       
       //this.fieldVariables(name, value);
    }

    /*
        handle Submit
    */
    handleSubmit = e => {
        e.preventDefault();
        //console.log(this.refs);
        
        let postJSON = {}
        for (let ref in this.refs) {
            if (ref !== "image" && ref !== "tags") {
                if (this.fieldIsSet(this.refs[ref].value)){
                    postJSON[ref] = this.refs[ref].value;
                }
            }
        }
        /*
        let postJSON = this.state.fieldVariables;
        */
        console.log('submit');
        console.log(postJSON);
        if (this.state.formValid) {
            axios.post('http://localhost:3001/transaction/detail', postJSON)
            .then(response => {
                console.log('1');
                console.log(response);
                console.log('2');
                if (response.status === 201) {
                    this.setState({ detailID: response.data._id });
                    
                    /* Needs withRouter from react-router */
                    //this.props.history.push('/detailed');

                    /* Needs Redirect from react-router-dom */
                    this.setState({ toDetailed: true });
                }
            })
            .catch(function (error) {
                console.log(error.response);
            });
        }
        
    }
    
    /*
        Render Add transaction Form
    */
    render () {
        /**/
        if (this.state.toDetailed === true) {
            return <Redirect to={{
                pathname: '/detailed',
                state: { detailID: this.state.detailID }
                }} />
        }
        

        return (
        <form className="transaction-form" onSubmit={this.handleSubmit} method="POST" autoComplete="on">
            <div className="transaction-container container">
            <div className="row">
                    <div className="row-content">
                        <div className="column-12">
                            <div className="data">
                                <h1 className="main-title">Add Transaction</h1>
                                <div id="demo"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row-content">
                        <div className="column-12">
                            <div className="data">
                                {
                                    Object.keys(this.state.formValid).map((fieldName, index) => {
                                        if (this.state.formValid[fieldName].length > 0) {
                                            console.log('things');
                                            return (
                                                <p key={ index }> { fieldName } { this.state.formValid[fieldName] } </p>
                                            )
                                        } else {
                                            console.log('nothings');
                                            return '';
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
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
                                    className="trans-input trans-input-amount {this.state[amount]}" 
                                    type="number" 
                                    id="amount" 
                                    name="amount"
                                    ref="amount"
                                    value={this.state.formVariables.amount}
                                    onChange={(event) => this.handleUserInput(event)}
                                    placeholder="0.00" 
                                    step="0.01" 
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
                        <div className={"transaction-column column-8 "}>
                            <div className={"transaction-data data "}>
                                <input 
                                    className={"trans-input "} 
                                    type="date" 
                                    id="date" 
                                    name="date"
                                    ref="date"
                                    value={this.state.formVariables.date}
                                    onChange={(event) => this.handleUserInput(event)}
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
                                value={this.state.formVariables.merchant}
                                onChange={(event) => this.handleUserInput(event)}
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
                                <select 
                                    className="trans-input" 
                                    id="category" 
                                    name="category"
                                    value={this.state.formVariables.category}
                                    onChange={(event) => this.handleUserInput(event)}
                                    ref="category" 
                                    required
                                >
                                    <option value="coffee">
                                        coffee
                                    </option>
                                    <option value="gas">
                                        gas
                                    </option>
                                    <option value="groceries">
                                        groceries
                                    </option>
                                    <option value="games" >
                                        games
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
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
                                    value={this.state.tags}
                                    onChange={(event) => this.handleUserInput(event)}
                                    placeholder="Tags separated by a comma" 
                                    ref="tags"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                */}
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                Notes
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <input 
                                    className="trans-input" 
                                    type="text" 
                                    name="notes"
                                    value={this.state.formVariables.notes}
                                    onChange={(event) => this.handleUserInput(event)}
                                    placeholder="Notes" 
                                    ref="notes" 
                                />
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
                                <button className="trans-submit" type="submit" disabled={!this.state.formValid}>
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

//export default withRouter(AddTransaction);
export default AddTransaction;
      