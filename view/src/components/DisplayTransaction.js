import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
//import DisplayRow from './viewTransaction/DisplayRow';

const DisplayTransaction = props => {
    let data = {};
    for (let field in props.fields) {
        data[field] = props.fields[field];
        if (field === "type") {
            data[field] = props.fields[field].toUpperCase();
        }
    }
    return (
        <div className="vt-container container">
            <div className="row table-header">
                <div className="row-content">
                    <div className="column-6">
                        <div className="data">
                            <h2>{data.type}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row-content">
                    <div className="column-3">
                        <div className="data title">
                            Category
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="data right">
                            {props.fields.category}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row-content">
                    <div className="column-3">
                        <div className="data title">
                            Merchant
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="data right">
                            {props.fields.merchant}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row-content">
                    <div className="column-3">
                        <div className="data title">
                            Amount
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="data right">
                            {props.fields.amount}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row-content">
                    <div className="column-6">
                        <div className="data title center">
                            Note
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row-content">
                    <div className="column-6">
                        <div className="data center">
                            {props.fields.note}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row table-footer">
                <div className="row-content">
                    <div className="column-4">
                        <div className="data">
                            <button>
                                <NavLink to="/edit_transaction" activeClassName="selected">Edit</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="column-4">
                        <div className="data right">
                            <button>
                                <NavLink to="/edit_transaction" activeClassName="selected">Edit</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayTransaction;