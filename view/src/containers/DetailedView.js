import React, { Component } from 'react';

class DetailedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailID: ''
        };
        console.log(props);
    }
    render () {
        return (
            <div className="main-content">Detailed View of {this.props.location.state.detailID}</div>
        );
    }
}

export default DetailedView;