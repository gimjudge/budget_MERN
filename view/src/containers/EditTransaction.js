import React, { Component } from 'react';

import '../css/transaction.css';
import EditTransactionForm from '../components/EditTransactionForm';

class EditTransaction extends Component {

    render () {
        return (
            <div className="main-content">
                <EditTransactionForm />
            </div>
        );
    }
}

export default EditTransaction;
