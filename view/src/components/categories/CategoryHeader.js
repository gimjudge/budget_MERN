import React, { Component } from 'react';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//const CategoryHeader = (props) => {
class CategoryHeader extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categoryID: this.props.categoryID,
            category: this.props.category
        };
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = e => {
        e.preventDefault();

        const categoryID = this.state.categoryID;
        let postJSON = {category: this.state.category};
        this.props.putCategory(categoryID, postJSON);
        
        const button = document.getElementById(`cat-${this.props.id}-edit`);
        const form = document.getElementById(`cat-${this.props.id}-edit-form`);
        button.classList.remove("display-none");
        form.classList.add("display-none");
    }

    render () {
        return (
            <div key={this.props.id} className="container category-header">
                <div className="row title-row">
                    <div className="row-content">
                        <div className="column-4">
                            <div className="data">
                            </div>
                        </div>
                        <div className="column-4">
                            <div className="data">
                                <h3>
                                    <button className="edit-button" id={`cat-${this.props.id}-edit`} onClick={this.props.displayOnClick}>
                                        <strong><FontAwesomeIcon className={`edit-icon`} icon="edit" /> {this.state.category}</strong>
                                    </button>
                                </h3>
                                    <form 
                                        name="subcat" 
                                        className={`cat-edit-form display-none`} 
                                        id={`cat-${this.props.id}-edit-form`} 
                                        onSubmit={this.handleSubmit} 
                                        method="POST" 
                                        autoComplete="on"
                                    >
                                        <input 
                                            className="category-input category-input-category" 
                                            type="text"
                                            name="category"
                                            id={`cat-${this.props.id}-edit-input`}
                                            placeholder="category"
                                            value={this.state.category}
                                            onChange={ this.handleUserInput}
                                            maxLength="32"
                                            required 
                                        />
                                        <button className="subcat-button" type="submit" >
                                            <FontAwesomeIcon icon="check" />
                                        </button>
                                    </form>
                            </div>
                        </div>
                        <div className="column-4">
                            <div className="data ">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row table-header">
                    <div className="row-content">
                        <div className="column-6">
                            <div className="data">
                                Subcategory
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="data">
                                Current
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="data">
                                Planned
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CategoryHeader;