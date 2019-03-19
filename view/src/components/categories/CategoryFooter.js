import React, { Component } from 'react';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//const CategoryFooter = (props) => {
class CategoryFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
                id: props.id,
                category: props.category,
                subcategory: '',
                planned: ''
        };
    }
    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.id === this.state.category) {

            let postJSON = {
                category: this.state.category,
                subcategories: [
                    {
                        subcategory: this.state.subcategory,
                        planned: this.state.planned
                    }
                ]
            }
            this.props.postCategory(postJSON);
            
        } else {
            let postJSON = {
                subcategory: this.state.subcategory,
                planned: this.state.planned
            }
            this.props.postSubcategory(this.state.id, postJSON);
        }
        this.setState({
            subcategory: '',
            planned: ''
        });

    }

    render () {
        //console.log(this.state);
        return (
            <div className="row table-footer">
                <div className="row-content">
                    <div className="column-12">
                        <div className="data">
                                <button className="subcat-button" id={`add-${this.props.id}`} onClick={this.props.displayOnClick}>
                                    <FontAwesomeIcon icon="plus" /> Subcategory
                                </button>
                            <form className="subcategory-form display-none" id={`add-${this.props.id}-form`} onSubmit={this.handleSubmit} method="POST" autoComplete="on">
                                <label htmlFor={this.props.id+"subcategory"}>Subcategory</label>
                                <input 
                                    className="subcategory-input subcategory-input-subcategory" 
                                    type="text"
                                    name="subcategory"
                                    id={`add-${this.props.id}-input`}
                                    placeholder="Subcategory"
                                    value={this.state.subcategory}
                                    onChange={ this.handleUserInput}
                                    maxLength="32"
                                    required 
                                />
                                <label htmlFor={this.props.id+"planned"}>Planned Budget</label>
                                <input 
                                    className="subcategory-input subcategory-input-planned" 
                                    type="number"
                                    name="planned"
                                    id={this.props.id+"planned"}
                                    placeholder="0.00"
                                    value={this.state.planned}
                                    onChange={ this.handleUserInput}
                                    maxLength="10"
                                    required 
                                />
                                <button className="subcat-button" type="submit" >
                                    <FontAwesomeIcon icon="check" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default CategoryFooter;