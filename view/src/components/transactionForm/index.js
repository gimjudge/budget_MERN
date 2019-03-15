import React, { Component } from 'react';

import axios from 'axios';

// Components
import Type from './Type';
import Amount from './Amount';
import TransDate from './TransDate';
import Merchant from './Merchant';
import Category from './Category';
import Subcategory from './Subcategory';
import Note from './Note';

//const TransactionForm = props => {
class TransactionForm extends Component {

    constructor(props) {
        super(props);

        //console.log(this.props);

        this.state = {
            categories: {},
            subcategories: {}
        }
    }

    componentDidMount() {
        this.getCategories ();
        //this.createOptions();
    }

    getCategories () {
        axios.get(`http://localhost:3001/category/`)
            .then(response => {
                if (response.status === 200) {
                    /**/
                    let data = {
                        categories: {},
                        subcategories: {}
                    };
                    for (let index in response.data) {
                        let categoryId = response.data[index]['_id'];
                        let category = response.data[index]['category'];
                        let subcategories = {};
                        let subcategories2 = [];

                        for (let i in response.data[index]['subcategories']) {
                            let subcategoryId = response.data[index]['subcategories'][i]['_id'];
                            let subcategory = response.data[index]['subcategories'][i]['subcategory'];
                            
                            subcategories[subcategoryId] = {
                                id: subcategoryId,
                                subcategory: subcategory
                            };
                            subcategories2.push ({
                                id: subcategoryId,
                                subcategory: subcategory
                            });
                        }
                        
                        data.categories[category] = {
                            id: categoryId,
                            category: category,
                            subcategory: subcategories
                        };
                        data.subcategories[category] = subcategories2;
                    }
                    this.setState(data);
                }
            })
            .catch(function (error) {
                //Create Error Response
                console.log(error.response);
        });
    }


    render () {
        //console.log('One');
        /*
        let subcategories = (typeof this.state.categories[this.props.formVariables.category] !== "undefined") ? 
        this.state.categories[this.props.formVariables.category].subcategory : 
        "";
        */
        let subcategories = (typeof this.state.subcategories[this.props.formVariables.category] !== "undefined") ? 
        this.state.subcategories[this.props.formVariables.category] : 
        "";
        console.log(subcategories);
        //console.log(this.state.subcategories);
        return (
            <div className="trans-fields-container container">
                <Type 
                    checked={this.props.formVariables.type} 
                    onChange={this.props.onChange}
                />
                <Amount 
                    value={this.props.formVariables.amount} 
                    onChange={this.props.onChange}
                />
                <TransDate 
                    value={this.props.formVariables.date} 
                    onChange={this.props.onChange}
                />
                <Merchant 
                    value={this.props.formVariables.merchant} 
                    onChange={this.props.onChange}
                />
                <Category 
                    value={this.props.formVariables.category} 
                    options={this.state.categories}
                    onChange={this.props.onChange}
                />
                <Subcategory 
                    value={this.props.formVariables.subcategory}
                    options={subcategories}
                    onChange={this.props.onChange}
                />
                <Note 
                    value={this.props.formVariables.note} 
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

/*
options={
                        (typeof this.state.categories[this.props.formVariables.category].subcategories !== "undefined") ? 
                        'no' : 
                        ''
                    }
*/

export default TransactionForm;
      