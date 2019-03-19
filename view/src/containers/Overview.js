import React, { Component } from 'react';
import OverviewHeader from '../components/OverviewHeader';
import OverviewCategories from '../components/OverviewCategories';

import axios from 'axios';

import '../css/overview.css';


class Overview extends Component {

    constructor(props) {
        super(props);
        
        let date = new Date(); 
        this.state = {
            month: date.getMonth(),
            data: {
                gotCategories: false,
                gotTransactions: false
            },
        };

        this.postSubcategory = this.postSubcategory.bind(this);
        this.postCategory = this.postCategory.bind(this);
    }

    componentDidMount() {
        this.getCategories();
        //this.getTransactions(this.state.month);
    }

    getCategories () {
        axios.get(`http://localhost:3001/category/`)
            .then(response => {
                if (response.status === 200) {
                    /*
                    */
                    
                    this.setState(prevState => {
                        let data = {
                            ...prevState.data,
                            categories:{},
                            gotCategories: true
                        };
                        for (let index in response.data) {
                            let categoryId = response.data[index]['_id'];
                            let category = response.data[index]['category'];
    
                            let subcategories = response.data[index]['subcategories'];
    
                            //data.categories[category] = {
                                data.categories[categoryId] = {
                                //...prevState.data.categories[category],
                                id: categoryId,
                                category: category,
                                subcategories: {

                                }
                            };
    
                            for (let i in subcategories) {
                                let subcategoryId = subcategories[i]['_id'];
                                let subcategory = (typeof subcategories[i]['subcategory'] === 'undefined') ? 'Misc' : subcategories[i]['subcategory'];
                                let planned = (typeof subcategories[i]['planned'] === 'undefined') ? 0 : subcategories[i]['planned'];
                                
                                //data.categories[category].subcategories[subcategory] = {
                                data.categories[categoryId].subcategories[subcategoryId] = {    
                                    //...prevState.data.categories[category].subcategories[subcategory],
                                    id: subcategoryId,
                                    subcategory: subcategory,
                                    planned: planned
                                };
                            }
                        }
                        
                        return ({
                            ...prevState,
                            data
                        });
                    }, () => {this.getTransactions(this.state.month)});
                }
            })
            .catch(function (error) {
                //Create Error Response
                console.log(error.response);
        });
    }

    getTransactions (monthNumber) {
        axios.get(`http://localhost:3001/transaction/group/month/${monthNumber}`)
            .then(response => {
                if (response.status === 200) {
                    this.setState(prevState => {
                        //response Data
                        let transactions = response.data.transaction;

                        let data = {
                            ...prevState.data,
                            gotTransactions: true
                        };
                        if (typeof data.categories === 'undefined') {
                            data.categories = {};
                        }

                        for (let index in transactions) {
                            //let category = transactions[index]['category'];
                            let categoryID = transactions[index]['categoryID'];
                            let subcategoryID = transactions[index]['subcategoryID'];
                            /*
                            */
                            if (typeof data.categories[categoryID] === 'undefined') {
                                data.categories[categoryID] = {
                                    subcategories:{}
                                };
                            }
                            if (typeof data.categories[categoryID].subcategories[subcategoryID] === 'undefined') {
                                data.categories[categoryID].subcategories[subcategoryID] = {};
                            }
                            //amounts
                            let newAmount = (typeof transactions[index]['amount'] === 'undefined') ? 0 : transactions[index]['amount'];
                            let categoryAmount = (data.categories[categoryID]['amount'] === 'undefined' || 0);
                            let subcategoryAmount = (data.categories[categoryID].subcategories[subcategoryID]['amount'] || 0);

                            data.categories[categoryID]['current'] = (categoryAmount+newAmount);
                            data.categories[categoryID]['subcategories'][subcategoryID]['current'] = (subcategoryAmount+newAmount);
                        }
                        return ({
                            ...prevState,
                            data
                        });
                    });
                }
            })
            .catch(function (error) {
                console.log(error.response);
        });
    }

    postCategory (postJSON) {
        axios.post(`http://localhost:3001/category`, postJSON)
            .then(response => {
                if (response.status === 201) {
                    //console.log(response);
                    this.getCategories();
                }
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }

    postSubcategory (categoryID, postJSON) {
        axios.post(`http://localhost:3001/category/${categoryID}/subcategories`, postJSON)
                .then(response => {
                    if (response.status === 201) {
                        //console.log(response);
                        this.getCategories();
                    }
                })
                .catch(function (error) {
                    console.log(error.response);
            });
    }

    putCategory (categoryID, postJSON) {
        axios.put(`http://localhost:3001/category/${categoryID}`, postJSON)
            .then(response => {
                if (response.status === 201) {
                    //console.log(response);
                    this.getCategories();
                }
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }

    putSubcategory (categoryID, subcategoryID, postJSON) {
        axios.put(`http://localhost:3001/category/${categoryID}/subcategories/${subcategoryID}`, postJSON)
                .then(response => {
                    if (response.status === 201) {
                        //console.log(response);
                        this.getCategories();
                    }
                })
                .catch(function (error) {
                    console.log(error.response);
            });
    }

    displayOnClick = e => {
        const addForm = document.getElementById(`${e.currentTarget.id}-form`);
        const addInput = document.getElementById(`${e.currentTarget.id}-input`);
        /*
        e.currentTarget.style.display = "none";
        addForm.style.display = "block";
        */
        e.currentTarget.classList.add("display-none");
        addForm.classList.remove("display-none");

        addInput.focus();
    }

    render () {
        if (!this.state.data.gotCategories || !this.state.data.gotTransactions) {
            return <div />
        }
        return (
            <div className="main-content">
                <OverviewHeader categories={this.state.data.categories} displayOnClick={this.displayOnClick} postCategory={this.postCategory} />
                <OverviewCategories 
                    categories={this.state.data.categories} 
                    displayOnClick={this.displayOnClick} 
                    postSubcategory={this.postSubcategory} 
                    putSubcategory={this.putSubcategory} 
                />
            </div>
        );
    }
}

export default Overview;