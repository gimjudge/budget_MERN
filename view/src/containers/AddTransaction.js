import React, { Component } from 'react';

import AddTransactionForm from '../components/AddTransactionForm';

class AddTransaction extends Component {
    render () {
        return (
            <>
                <div>Add Transaction</div>
                <AddTransactionForm />
            </>
        );
    }
}

export default AddTransaction;
