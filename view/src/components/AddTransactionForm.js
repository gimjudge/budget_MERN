import React, { Component } from 'react';

// Fav Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddTransaction extends Component {
    render () {
        return (
        <form className="transaction-form" action="" method="POST" autoComplete="on">
            <div className="transaction-container container">
                <div className="row">
                    <div className="row-content">
                        <div className="column-12">
                            <div className="data">
                                <h1 className="main-title">Add Transaction</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trans-type-row row">
                    <div className="trans-type-row-content row-content">
                        <div className="trans-type-column column-6">
                            <div className="trans-type-data data">
                                <button className="trans-expense">Expense</button>
                            </div>
                        </div>
                        <div className="transaction-column column-6">
                            <div className="transaction-data data">
                                <button className="trans-income">Income</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row trans-row-amount-title row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-12">
                            <div className="transaction-data data">
                                <label htmlFor="amount">Amount</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trans-row-amount row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-12">
                            <div className="transaction-data data">
                                <input className="trans-input trans-input-amount" type="number" id="amount" name="transaction[amount]" placeholder="0.00" step="0.01" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                <label htmlFor="transaction-date">Date</label>
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <input className="trans-input" type="date" id="transaction-date" name="transaction[date]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row row">
                <div className="transaction-row-content row-content">
                    <div className="transaction-column column-4">
                        <div className="transaction-data data">
                            <label htmlFor="merchant">Merchant</label>
                        </div>
                    </div>
                    <div className="transaction-column column-8">
                        <div className="transaction-data data">
                            <input 
                            className="trans-input" 
                            type="text" 
                            id="merchant"
                            name="transaction[merchant]" 
                            placeholder="Merchant" />
                        </div>
                    </div>
                </div>
                </div>
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                <label htmlFor="category">Category</label>
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <select className="trans-input" id="category" name="trans-category">
                                    <option value="transaction[category][coffee]">
                                        coffee
                                    </option>
                                    <option value="transaction[category][gas]">
                                        gas
                                    </option>
                                    <option value="transaction[category][groceries]">
                                        groceries
                                    </option>
                                    <option value="transaction[category][coffee]">
                                        coffee
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                <label htmlFor="tags">Tags</label>
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <input className="trans-input" id="tags" type="text" name="transaction[tags]" placeholder="Tags separated by a comma"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row row">
                    <div className="transaction-row-content row-content">
                        <div className="transaction-column column-4">
                            <div className="transaction-data data">
                                Notes
                            </div>
                        </div>
                        <div className="transaction-column column-8">
                            <div className="transaction-data data">
                                <input className="trans-input" type="text" name="transaction[notes]" placeholder="Notes"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="finalizing-row row">
                    <div className="finalizing-content row-content">
                        <div className="finalizing-column column-4">
                            <div className="finalizing-data data center">
                                <button className="trans-cancel" >
                                    <FontAwesomeIcon icon="times" />
                                </button>
                            </div>
                        </div>
                        <div className="finalizing-column column-4">
                            <div className="finalizing-data data center">
                                <button className="trans-camera">
                                    <FontAwesomeIcon icon="camera" />
                                </button>
                            </div>
                        </div>
                        <div className="finalizing-column column-4">
                            <div className="finalizing-data data center">
                                <button className="trans-submit">
                                    <FontAwesomeIcon icon="check" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
  }
}

export default AddTransaction;
      