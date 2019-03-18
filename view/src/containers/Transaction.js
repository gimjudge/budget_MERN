import React, { Component } from 'react';

import '../css/transaction.css';
import TransactionForm from '../components/TransactionForm';
import PageTitle from '../components/PageTitle';


class Transaction extends Component {
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
        // Create Title
        const capsAction = this.state.action.charAt(0).toUpperCase() + this.state.action.slice(1);
        const title = capsAction + " Transaction";
            
        return (
            <div className="main-content">
                <PageTitle title={title}/>
                <TransactionForm action={this.state.action} transactionID={this.props.match.params.id} />
            </div>
        );
        /*return (
            <BrowserRouter>
                <div className="main-content">
                    <PageTitle title={"hi"}/>
                    <Switch>
                        <Route exact path="/transaction"  component={TransactionForm} />
                        <Route path="/transaction/add"  component={TransactionForm} />
                        <Route path="/transaction/edit/:id"  component={TransactionForm} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
        */
    }
}

export default Transaction;
