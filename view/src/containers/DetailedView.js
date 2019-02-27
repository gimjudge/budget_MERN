import React, { Component } from 'react';

class DetailedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVariables: {
                type: "expense",
                amount: 0.00,
                date: "2018-02-26",
                merchant: '',
                category: 'gas'
            },
            fieldValid: {
                amount: false,
                category: false,
                date: false,
                merchant: false,
                type: false
            },
            formResponse: '',
            formValid: false,
            toDetailed: false,
            detailID: ''
        };
    }
    
    componentDidMount() {
    }
    render () {
        return (
            <div className="main-content">Detailed View of {this.props.location.state.detailID}</div>
        );
    }
}

export default DetailedView;