import React, { Component } from 'react';
import Categories from '../components/Categories';

import axios from 'axios';

import '../css/overview.css';

const jsonData = { 
    "budget": {
        "categories":[
            {
                "key": 1,
                "name": "Food",
                "subCategories": [
                    {
                        "key": 1,
                        "name": "Groceries",
                        "current": 300.00,
                        "planned": 400.00,
                    },
                    {
                        "key": 2,
                        "name": "Coffee",
                        "current": 30.00,
                        "planned": 0.00,
                    }
                ]
            },
            {
                "key": 2,
                "name": "Personal",
                "subCategories": [
                    {
                        "key": 1,
                        "name": "Clothing",
                        "current": 30.00,
                        "planned": 40.00,
                    },
                    {
                        "key": 2,
                        "name": "Phone",
                        "current": 200.00,
                        "planned": 200.00,
                    },
                    {
                        "key": 3,
                        "name": "Fun Money",
                        "current": 20.00,
                        "planned": 40.00,
                    },
                    {
                        "key": 4,
                        "name": "Hair/Cosmetics",
                        "current": 30.00,
                        "planned": 0.00,
                    },
                    {
                        "key": 5,
                        "name": "Subscriptions",
                        "current": 30.00,
                        "planned": 50.00,
                    }
                ]
            }
        ]
    } 
};



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
    
                            data.categories[category] = {
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
                                
                                data.categories[category].subcategories[subcategory] = {
                                    //...prevState.data.categories[category].subcategories[subcategory],
                                    id: subcategoryId,
                                    subcategory: subcategory,
                                    planned: planned
                                };
                            }
                        }
                        /*
                        console.log('Categories prev State');
                        console.log(prevState);

                        console.log('Categories Prepped Data');
                        console.log(data);
                        */
                        
                        return ({
                            ...prevState,
                            data
                        });
                    }, () => {this.getTransactions(this.state.month)});
                    
                    //this.setState({roughCategories: response.data});
                    //this.setState({data});
                    /*
                    this.setState(prevState => ({
                        ...prevState
                        data: {
                            ...prevState.data,
                            ...data
                        }
                    }));
                    */
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
                       //console.log('Transaction data 1');
                        //console.log(data);

                        for (let index in transactions) {
                            let category = transactions[index]['category'];
                            let subcategory = (typeof transactions[index]['subcategory'] === 'undefined') ? 'Misc' : transactions[index]['subcategory'];
                            /*
                            */
                            if (typeof data.categories[category] === 'undefined') {
                                data.categories[category] = {
                                    subcategories:{}
                                };
                            }
                            if (typeof data.categories[category].subcategories[subcategory] === 'undefined') {
                                data.categories[category].subcategories[subcategory] = {};
                            }
                            //console.log('Transaction data 2');
                            //console.log(data);
                            //amounts
                            let newAmount = (typeof transactions[index]['amount'] === 'undefined') ? 0 : transactions[index]['amount'];
                            let categoryAmount = (data.categories[category]['amount'] === 'undefined' || 0);
                            let subcategoryAmount = (data.categories[category].subcategories[subcategory]['amount'] || 0);
                            /*
                            data.categories[category] = {
                                current: (categoryAmount+newAmount),
                                subcategories: {
                                    [subcategory]: {
                                        current: (subcategoryAmount+newAmount)
                                    }
                                }
                            };
                            */
                            data.categories[category]['category'] = category;
                            data.categories[category]['current'] = (categoryAmount+newAmount);
                            data.categories[category]['subcategories'][subcategory]['subcategory'] = subcategory;
                            data.categories[category]['subcategories'][subcategory]['current'] = (subcategoryAmount+newAmount);

                            //data.subcategories[category] = subcategories2;
                            //console.log('Transaction data 3');
                            //console.log(data);
                        }
                        /*
                        console.log('Transaction prev State');
                        console.log(prevState);

                        console.log('Transaction Prepped Data');
                        console.log(data);
                        */
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

    render () {
        if (!this.state.data.gotCategories || !this.state.data.gotTransactions) {
            return <div />
        }
        //console.log('this state');
        //console.log(this.state);
        //<Categories categories={jsonData.budget.categories}/>
        return (
            <div className="main-content">
                <h1 className="main-title">Overview</h1>
                <Categories categories={this.state.data.categories}/>
            </div>
        );
    }
}

export default Overview;