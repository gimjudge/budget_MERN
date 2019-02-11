import React, { Component } from 'react';

class AddTransaction extends Component {
  render () {
    return (
        <form className="transaction-form" action="" method="POST" autoComplete="on">
            <div className="transaction-container table-container">
                <div className="table-row">
                    <div className="table-row-content">
                        <div className="table-column-12">
                            <div className="table-data">
                                <h1>Add Transaction</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trans-type-row table-row">
                    <div className="trans-type-row-content table-row-content">
                        <div className="trans-type-column table-column-6">
                            <div className="trans-type-data table-data">
                                <button className="trans-expense">Expense</button>
                            </div>
                        </div>
                        <div className="transaction-column table-column-6">
                            <div className="transaction-data table-data">
                                <button className="trans-income">Income</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row trans-row-amount-title table-row">
                    <div className="transaction-row-content table-row-content">
                        <div className="transaction-column table-column-12">
                            <div className="transaction-data table-data">
                                <label htmlFor="amount">Amount</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trans-row-amount table-row">
                    <div className="transaction-row-content table-row-content">
                        <div className="transaction-column table-column-12">
                            <div className="transaction-data table-data">
                                <input className="trans-input trans-input-amount" type="number" id="amount" name="transaction[amount]" placeholder="0.00" step="0.01" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row table-row">
                    <div className="transaction-row-content table-row-content">
                        <div className="transaction-column table-column-4">
                            <div className="transaction-data table-data">
                                <label htmlFor="transaction-date">Date</label>
                            </div>
                        </div>
                        <div className="transaction-column table-column-8">
                            <div className="transaction-data table-data">
                                <input className="trans-input" type="date" id="transaction-date" name="transaction[date]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row table-row">
                <div className="transaction-row-content table-row-content">
                    <div className="transaction-column table-column-4">
                        <div className="transaction-data table-data">
                            <label htmlFor="merchant">Merchant</label>
                        </div>
                    </div>
                    <div className="transaction-column table-column-8">
                        <div className="transaction-data table-data">
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
                <div className="transaction-row table-row">
                    <div className="transaction-row-content table-row-content">
                        <div className="transaction-column table-column-4">
                            <div className="transaction-data table-data">
                                <label htmlFor="category">Category</label>
                            </div>
                        </div>
                        <div className="transaction-column table-column-8">
                            <div className="transaction-data table-data">
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
                <div className="transaction-row table-row">
                    <div className="transaction-row-content table-row-content">
                        <div className="transaction-column table-column-4">
                            <div className="transaction-data table-data">
                                <label htmlFor="tags">Tags</label>
                            </div>
                        </div>
                        <div className="transaction-column table-column-8">
                            <div className="transaction-data table-data">
                                <input className="trans-input" id="tags" type="text" name="transaction[tags]" placeholder="Tags separated by a comma"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-row table-row">
                    <div className="transaction-row-content table-row-content">
                        <div className="transaction-column table-column-4">
                            <div className="transaction-data table-data">
                                Notes
                            </div>
                        </div>
                        <div className="transaction-column table-column-8">
                            <div className="transaction-data table-data">
                                <input className="trans-input" type="text" name="transaction[notes]" placeholder="Notes"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="finalizing-row table-row">
                    <div className="finalizing-content table-row-content">
                        <div className="finalizing-column table-column-4">
                            <div className="finalizing-data table-data center">
                                <button className="trans-cancel" >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="finalizing-column table-column-4">
                            <div className="finalizing-data table-data center">
                                <button className="trans-title">
                                    <i className="fas fa-camera"></i>
                                </button>
                            </div>
                        </div>
                        <div className="finalizing-column table-column-4">
                            <div className="finalizing-data table-data center">
                                <button className="trans-submit">
                                    <i className="fas fa-check"></i>
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
      