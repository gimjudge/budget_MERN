import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Components
import DisplayTransaction from '../components/DisplayTransaction';

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
            toViewTransaction: false,
            detailID: ''
        };
    }

    componentDidMount() {
        this.getTransaction(this.props.location.state.detailID);
    }

    getTransaction (id) {
        axios.get(`http://localhost:3001/transaction/detail/${id}`)
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
                <div className=" container">
                    <div className="row">
                        <div className="row-content">
                            <div className="column-12">
                                <div className="data">
                                    <h1 className="main-title">Transaction</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DisplayTransaction displayFields={this.state.displayFields} fields={this.state.fields} />
                </div>
            </div>
        );
    }
}

export default ViewTransation;