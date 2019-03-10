import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Components
import DisplayTransaction from '../components/DisplayTransaction';
import PageTitle from '../components/PageTitle';

// CSS
import '../css/viewTransaction.css';

class ViewTransation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            displayFields: [
                'type',
                'amount',
                'merchant',
                'category',
                'note'
            ],
            detailID: ''
        };
    }

    componentDidMount() {
        //console.log(this);
        this.getTransaction(this.requestTransactionId());
    }
    requestTransactionId() {
        return (this.props.transactionID) ? this.props.transactionID : this.props.match.params.id;
    }
    getTransaction (id) {
        axios.get(`http://localhost:3001/transaction/single/${id}`)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        fields: response.data
                    });
                }
            })
            .catch(function (error) {
                console.log(error.response);
        });
    }

    render () {
        return (
                <div className="main-content">
                    <PageTitle title={"View Transaction"}/>
                    <DisplayTransaction displayFields={this.state.displayFields} fields={this.state.fields} />
                </div>
        );
    }
}

export default ViewTransation;