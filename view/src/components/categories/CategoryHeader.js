import React from 'react';

const CategoryHeader = (props) => {

    return (
        <div key={props.id} className="container category-header">
            <div className="row title-row">
                <div className="row-content">
                    <div className="column-4">
                        <div className="data">
                        </div>
                    </div>
                    <div className="column-4">
                        <div className="data">
                            <h3>{props.category}</h3>
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
                        <div className="data number-data">
                            Current
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="data number-data">
                            Planned
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryHeader;