import React, { Component } from 'react';

import '../css/transaction.css';
import TransactionForm from '../components/TransactionForm';
import ViewTransaction from '../containers/ViewTransaction';


class AddTransaction extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            action: this.props.match.params.action
        };

        this.handleAction = this.handleAction.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.action !== prevProps.match.params.action) {
            this.handleAction(this.props.match.params.action);
          }
    }

    handleAction(action = null) {
        if (action === null) {
            return this.state.action;
        } else {
            this.setState({action});
        }
    }
    
    render () {
        //console.log(this);
        
        

        const transAction = this.state.action === "view" ? 
            <ViewTransaction transactionID={this.props.match.params.id}/> : 
            <TransactionForm changeAction={this.handleAction} action={this.state.action} transactionID={this.props.match.params.id} />
        return (
            <div className="main-content">
                {transAction}
            </div>
        );
    }
}

export default AddTransaction;
