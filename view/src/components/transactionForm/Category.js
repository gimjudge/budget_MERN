import React from 'react';

const Category = props => {
    return (
        <div className="transaction-row row">
            <div className="transaction-row-content row-content">
                <div className="transaction-column column-4">
                    <div className="transaction-data data">
                        <label htmlFor="category">Category</label>
                    </div>
                </div>
                <div className="transaction-column column-8">
                    <div className="transaction-data data">
                        <select 
                            className="trans-input" 
                            id="category" 
                            name="category"
                            value={props.value}
                            onChange={props.onChange}
                            required
                        >
                            <option value="coffee">
                                coffee
                            </option>
                            <option value="gas">
                                gas
                            </option>
                            <option value="groceries">
                                groceries
                            </option>
                            <option value="games" >
                                games
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;