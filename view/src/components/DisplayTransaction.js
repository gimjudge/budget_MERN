import React from 'react';
import { NavLink } from 'react-router-dom';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
//import DisplayRow from './viewTransaction/DisplayRow';

const DisplayTransaction = props => {
    //console.log(props);
    let data = {};
    let transactionID ='';
    for (let field in props.fields) {
        switch(field) {
            case "_id":
                transactionID = props.fields[field];
                break;
            case "type":
                data[field] = props.fields[field].toUpperCase();
                break;
            case "date":
                let date = new Date(props.fields[field]);
                data[field] = date.toDateString();
                break;
            default:
                data[field] = props.fields[field];
                break;
        }
    }
    //console.log(data);
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
                            {data.category}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row-content">
                    <div className="column-3">
                        <div className="data title">
                            Subcategory
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="data right">
                            {data.subcategory}
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
                            {data.merchant}
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
                    <div className="column-3">
                        <div className="data title">
                            Date
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="data right">
                            {data.date}
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
                            {data.note}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row table-footer">
                <div className="row-content">
                    <div className="column-4">
                        <div className="data center">
                            <NavLink to={`/transaction/edit/${transactionID}`} activeClassName="selected">
                                <button><FontAwesomeIcon icon="edit" /> Edit</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayTransaction;