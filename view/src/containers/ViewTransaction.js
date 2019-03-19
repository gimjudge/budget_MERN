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
        this.getTransactionById(this.requestTransactionId());
    }
    requestTransactionId() {
        return (this.props.transactionID) ? this.props.transactionID : this.props.match.params.id;
    }
    getTransactionById (id) {
        axios.get(`http://localhost:3001/transaction/single/${id}`)
            .then(response => {
                if (response.status === 200) {

                    this.setState({
                        fields: response.data
                    }, () => {this.getCategoryByID (response.data.categoryID, response.data.subcategoryID)});
                }
            })
            .catch(function (error) {
                console.log(error.response);
        });
    }
    getCategoryByID (catID = this.state.fields.categoryID, subID = this.state.fields.subcategoryID) {
        axios.get(`http://localhost:3001/category/${catID}`)
            .then(response => {
                if (response.status === 200) {
                    
                    const category = response.data.category;
                    const subcategories = response.data.subcategories;

                    let subcategory = '';
                    for (let index in subcategories) {
                        if ( subcategories[index]['_id'] === subID) {
                            subcategory = subcategories[index].subcategory;
                        }
                    }
                    this.setState(prevState =>({
                        fields: {
                            ...prevState.fields,
                            category: category,
                            subcategory: subcategory

                        }
                    }));
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