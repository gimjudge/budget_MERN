import React, {Component} from 'react';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Subcategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryID: this.props.categoryID,
            subcategoryID: this.props.id,
            subcategory: this.props.subcategory,
            planned: this.props.planned
        };
    }
    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.name);

        const update = e.target.name;
        const categoryID = this.state.categoryID;
        const subcategoryID = this.state.subcategoryID;

        if (update === "subcat") {
            let postJSON = {subcategory: this.state.subcategory};
            this.props.putSubcategory(categoryID, subcategoryID, postJSON);
            
        } else if (update === "planned") {
            let postJSON = {planned: this.state.planned}
            this.props.putSubcategory(categoryID, subcategoryID, postJSON);
        }
        
        const button = document.getElementById(`${update}-${this.props.id}-edit`);
        const form = document.getElementById(`${update}-${this.props.id}-edit-form`);
        button.classList.remove("display-none");
        form.classList.add("display-none");
        /*
        form.style.display = "none";
        button.style.display = "block";
        */
    }
    render () {
        return (
            <div key={this.props.id} className="container">
                <div className="row">
                    <div className="row-content">
                        <div className="column-6">
                            <div className={`data`} >
                                    <button className="edit-button" id={`subcat-${this.props.id}-edit`} onClick={this.props.displayOnClick}>
                                        <FontAwesomeIcon className={`edit-icon`} icon="edit" /> {this.state.subcategory}
                                    </button>
                                <form name="subcat" className={`subcat-edit-form display-none`} id={`subcat-${this.props.id}-edit-form`} onSubmit={this.handleSubmit} method="POST" autoComplete="on">
                                    <input 
                                        className="subcategory-input subcategory-input-subcategory" 
                                        type="text"
                                        name="subcategory"
                                        id={`subcat-${this.props.id}-edit-input`}
                                        placeholder="subcategory"
                                        value={this.state.subcategory}
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
                        <div className="column-3">
                            <div className="data number-data">
                                {(this.props.current || 0)}
                            </div>
                        </div>
                        <div className="column-3">
                            <div className={`data number-data `} >
                                    <button className="edit-button" id={`planned-${this.props.id}-edit`} onClick={this.props.displayOnClick}>
                                        {(this.state.planned || 0)} <FontAwesomeIcon className={`edit-icon`} icon="edit" />
                                    </button>
                                <form name="planned" className={`planned-edit-form display-none`} id={`planned-${this.props.id}-edit-form`} onSubmit={this.handleSubmit} method="POST" autoComplete="on">
                                    <input 
                                        className="planned-input subcategory-input-planned" 
                                        type="text"
                                        name="planned"
                                        id={`planned-${this.props.id}-edit-input`}
                                        placeholder="planned"
                                        value={this.state.planned}
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
                    </div>
                </div>
            </div>
        );
    }
};

export default Subcategory;