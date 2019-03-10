import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Components
import TransactionForm from './transactionForm/';
import AddFooter from './transactionForm/AddFooter';
import EditFooter from './transactionForm/EditFooter';

class AddTransaction extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            fields:{},
            formVariables: {
                type: '',
                amount: '',
                date: '',
                merchant: '',
                category: '',
                note: ''
            },
            fieldValid: {
                amount: false,
                category: false,
                date: false,
                merchant: false,
                type: false
            },
            apiResponse: {},
            formResponse: '',
            formValid: false,
            toViewTransaction: false,
            transactionID: this.props.transactionID,
            action: this.props.action
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleCancelButton = this.handleCancelButton.bind(this);
        this.handleCameraButton = this.handleCameraButton.bind(this);
    }

    componentDidMount() {
        this.preparingAction();
    }

    componentDidUpdate(prevProps) {
        if (this.props.action !== prevProps.action) {
            this.setState({
                action:this.props.action,
                transactionID: null
            });
            this.preparingAction();
        }
        if (this.props.transactionID !== prevProps.transactionID) {
            this.setState({
                transactionID:this.props.transactionID
            });
            this.preparingAction();
        }
    }

    preparingAction() {
        if (typeof this.props.action !== 'undefined') {
            this[this.props.action+"Action"]()
        } else {
            //error No Action Prop
        }
    }
    editAction() {
        if (typeof this.props.transactionID !== 'undefined') {
            this.getTransactionById (this.props.transactionID);
        } else {
            //error No transactionID
        }
    }
    /*
        Sets some Defaults
    */
    addAction() {
        this.setFormVariable ({
            date: this.toDayte(),
            type: "expense"
        }, 'yes');
    }

    /*
        Gets the transaction data from the Mongoose Express Model* API
    */
    getTransactionById (id) {
        axios.get(`http://localhost:3001/transaction/single/${id}`)
            .then(response => {
                if (response.status === 200) {
                    let data = {
                        formVariables: response.data,
                        fieldValid:{},
                        formValid:false
                    }
                    data.formVariables.date = data.formVariables.date.slice(0,10);

                    for (let fieldName in this.state.fieldValid) {
                        data.fieldValid[fieldName] = this.isFieldValid(fieldName, data.formVariables[fieldName]);
                    }
                    data.formValid = this.allTrue(data.fieldValid);
                    this.setState(data);
                }
            })
            .catch(function (error) {
                //Create Error Response
                console.log(error.response);
        });
    }
    
    allTrue(object) {
        for (let key in object) {
            if (object[key] !== true) {
                return false;
            }
        }
        return true;
    }
    

    /* Todays Date */
    toDayte() {
        const d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            yyyy = d.getFullYear();
        const mm = (month.length < 2) ? '0' + month : month;
        const dd = (day.length < 2) ? '0' + day : day;
        const dateNow = [yyyy, mm, dd].join('-');
        return dateNow;
    }

    /*
        Form Validation
        sets formValid state to true or false
    
    */
    setFormValid() {
        let result = this.allTrue(this.state.fieldValid);
        this.setState({formValid: result});
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
        Expects object 
        Returns object
    */
    fieldValid (data) {
        let result = {};
        for (let fieldName in data) {
            if (typeof this.state.fieldValid[fieldName] !== 'undefined') {
                result[fieldName] = this.isFieldValid(fieldName, data[fieldName]);
            }
        }
        return result;
    }

    emptyObject(data) {
        let result = {};
        for (let key in data) {
            result[key] = '';
        }
        return result;
    }
    /* 
        Set State for Form Variable
        expects key value object
    */
    setFormVariable (data, erase = null) {
        let newState = {
            formVariables: {},
            fieldValid:{}
        };
        for (let fieldName in data) {
            newState.formVariables[fieldName] = data[fieldName];
        }
        this.setState(prevState => {
            // No input leaves the previous state in.
            if (erase !== null) {
                let oldState = this.emptyObject(prevState.formVariables);
                newState.formVariables = {
                    ...oldState,
                    ...newState.formVariables
                }
            } else {
                newState.formVariables = {
                    ...prevState.formVariables,
                    ...newState.formVariables
                }
            }
            //Checks to see if the new state form variables are valid
            newState.fieldValid = this.fieldValid(newState.formVariables);
            return ({
                formVariables: {
                    ...newState.formVariables
                },
                fieldValid:{
                    ...prevState.fieldValid,
                    ...newState.fieldValid
                }
            })
        }, () => {this.setFormValid()});
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
        onChange user inputs
    */
    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setFormVariable({[name]: value});
    }

    /*
        handle Submit
    */
    handleSubmit = e => {
        e.preventDefault();
        
        if (this.state.formValid) {
                let postJSON = this.state.formVariables;
            if (this.props.action === "add") {
                axios.post('http://localhost:3001/transaction/single', postJSON)
                .then(response => {
                    if (response.status === 201) {
                        this.setState({ transactionID: response.data._id });
                        //this.setState({ apiResponse: response });

                        /* Needs Redirect from react-router-dom */
                        this.setState({ toViewTransaction: true });
                    }
                })
                .catch(function (error) {
                    console.log(error.response);
                });
            } else if (this.props.action === "edit" && (typeof this.props.transactionID !== "undefined")) {
                axios.put(`http://localhost:3001/transaction/single/${this.props.transactionID}`, postJSON)
                .then(response => {
                    if (response.status === 200) {
                        this.setState({ transactionID: this.props.transactionID });
                        this.setState({ apiResponse: response });

                        /* Needs Redirect from react-router-dom */
                        this.setState({ toViewTransaction: true });
                    }
                })
                .catch(function (error) {
                    console.log(error.response);
                });
            }
        }
    }
    
    /*
        Render Add transaction Form
    */
    render () {
        /* Redirect to detailed */
        if (this.state.toViewTransaction === true) {
            return <Redirect to={{
                pathname: `/transaction/view/${this.state.transactionID}`,
                state: { transactionID: this.state.transactionID }
                }} />
        }
        
        const footers = {
            'add': AddFooter,
            'edit': EditFooter
        };
        const Footer = footers[this.props.action || 'add'];

        return (
            <form className="transaction-form" onSubmit={this.handleSubmit} method="POST" autoComplete="on">
                    <TransactionForm 
                        formVariables={this.state.formVariables}
                        onChange={this.handleUserInput}
                        action={this.props.action}
                        cancelButton={this.handleCancelButton}
                        cameraButton={this.handleCameraButton}
                        formValid={this.state.formValid}
                    />
                    <Footer 
                        cancelButton={this.handleCancelButton}
                        cameraButton={this.handleCameraButton}
                        formValid={this.state.formValid}
                    />
            </form>
        );
    }
}

//export default withRouter(AddTransaction);
export default AddTransaction;
      