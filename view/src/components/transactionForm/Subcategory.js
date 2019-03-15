import React, { Component } from 'react';

/*const Category = props => {*/

class Subcategory extends Component {

    buildOptions () {
        let arr = [];

        for (let option in this.props.options) {
            arr.push(
            <option key={option} value={this.props.options[option].subcategory}>
            {this.props.options[option].subcategory}
            </option>
            )
        }

        return arr;
    }

    render () {
        //console.log(this.props);
        return (
            <div className="transaction-row row">
                <div className="transaction-row-content row-content">
                    <div className="transaction-column column-4">
                        <div className="transaction-data data">
                            <label htmlFor="category">Subcategory</label>
                        </div>
                    </div>
                    <div className="transaction-column column-8">
                        <div className="transaction-data data">
                            <select 
                                className="trans-input" 
                                id="subcategory" 
                                name="subcategory"
                                value={this.props.value}
                                onChange={this.props.onChange}
                                required
                            >
                                <option value="">
                                    Pick Subcategory
                                </option>
                                {this.buildOptions()}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subcategory;