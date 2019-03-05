import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


// Components
import Type from './transactionForm/Type';
import Amount from './transactionForm/Amount';
import TransDate from './transactionForm/TransDate';
import Merchant from './transactionForm/Merchant';
import Category from './transactionForm/Category';
import Notes from './transactionForm/Notes';
import Footer from './transactionForm/EditFooter';

class AddTransaction extends Component {
    
    constructor(props) {
        super(props);
        const d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            yyyy = d.getFullYear();
        const mm = (month.length < 2) ? '0' + month : month;
        const dd = (day.length < 2) ? '0' + day : day;
        const dateNow = [yyyy, mm, dd].join('-');
        this.state = {
            formVariables: {
                type: "expense",
                amount: '',
                date: dateNow,
                merchant: '',
                category: 'gas',
                note: ''
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
            toViewTransaction: false,
            detailID: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleCancelButton = this.handleCancelButton.bind(this);
        this.handleCameraButton = this.handleCameraButton.bind(this);
    }

    componentDidMount() {
        for (let name in this.state.fieldValid) {
            this.fieldValidation(name, this.state.formVariables[name]);
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
        onChange user inputs
    */
    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({
            formVariables: {
                ...prevState.formVariables,
                [name]: value
            }
        }),() => { this.fieldValidation(name, value) }
        );
    }

    /*
        handle Submit
    */
    handleSubmit = e => {
        e.preventDefault();
        
        if (this.state.formValid) {
            let postJSON = this.state.formVariables;
            axios.post('http://localhost:3001/transaction/detail', postJSON)
            .then(response => {
                if (response.status === 201) {
                    this.setState({ detailID: response.data._id });

                    /* Needs Redirect from react-router-dom */
                    this.setState({ toViewTransaction: true });
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
        /* Redirect to detailed */
        if (this.state.toViewTransaction === true) {
            return <Redirect to={{
                pathname: '/view_transaction',
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
                <Type 
                    checked={this.state.formVariables.type} 
                    onChange={this.handleUserInput}
                />
                <Amount 
                    value={this.state.formVariables.amount} 
                    onChange={this.handleUserInput}
                />
                <TransDate 
                    value={this.state.formVariables.date} 
                    onChange={this.handleUserInput}
                />
                <Merchant 
                    value={this.state.formVariables.merchant} 
                    onChange={this.handleUserInput}
                />
                <Category 
                    value={this.state.formVariables.category} 
                    onChange={this.handleUserInput}
                />
                <Notes 
                    value={this.state.formVariables.notes} 
                    onChange={this.handleUserInput}
                />
                <Footer 
                    cancelButton={this.handleCancelButton}
                    cameraButton={this.handleCameraButton}
                    formValid={this.state.formValid}
                />
            </div>
        </form>
    );
  }
}

//export default withRouter(AddTransaction);
export default AddTransaction;
      