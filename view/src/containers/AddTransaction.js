import React, { Component } from 'react';

import '../css/addTransaction.css';
import AddTransactionForm from '../components/AddTransactionForm';

class AddTransaction extends Component {

    render () {
        return (
            <div className="main-content">
                <AddTransactionForm />
            </div>
        );
    }
}

export default AddTransaction;
