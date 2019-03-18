import React, { Component } from 'react';
import axios from 'axios';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OverviewHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ''
        };
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = e => {
        e.preventDefault();
        let postJSON = {
            category: this.state.category,
        }
        this.props.postCategory(postJSON);
        this.setState({category: ''});
    }

    render () {
        return (
            <div className="container category-header">
                <div className="row title-row">
                    <div className="row-content">
                        <div className="column-3">
                            <div className="data">
                            </div>
                        </div>
                        <div className="column-6">
                            <div className="data">
                                <h1 className="main-title">Month Overview</h1>
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="data add-category">
                                    <button className="cat-button" id="add-category" onClick={this.props.displayOnClick}>
                                        <FontAwesomeIcon icon="plus" /> Category
                                    </button>
                                <form className="category-form display-none" id="add-category-form" onSubmit={this.handleSubmit} method="POST" autoComplete="on">
                                    <input 
                                        className="category-input category-input-category" 
                                        type="text"
                                        name="category"
                                        id={`add-category-input`}
                                        placeholder="Category"
                                        value={this.state.category}
                                        onChange={ this.handleUserInput}
                                        maxLength="32"
                                        required 
                                    />
                                    <button className="cat-button" type="submit" >
                                        <FontAwesomeIcon icon="check" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default OverviewHeader;