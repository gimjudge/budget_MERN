import React from 'react';

// Components
import Type from './Type';
import Amount from './Amount';
import TransDate from './TransDate';
import Merchant from './Merchant';
import Category from './Category';
import Note from './Note';

const TransactionForm = props => {

    return (
        <fieldset className="trans-fields-container container">
            <Type 
                checked={props.formVariables.type} 
                onChange={props.onChange}
            />
            <Amount 
                value={props.formVariables.amount} 
                onChange={props.onChange}
            />
            <TransDate 
                value={props.formVariables.date} 
                onChange={props.onChange}
            />
            <Merchant 
                value={props.formVariables.merchant} 
                onChange={props.onChange}
            />
            <Category 
                value={props.formVariables.category} 
                onChange={props.onChange}
            />
            <Note 
                value={props.formVariables.note} 
                onChange={props.onChange}
            />
        </fieldset>
    );
}

export default TransactionForm;
      