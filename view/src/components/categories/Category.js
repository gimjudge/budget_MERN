import React from 'react';
import SubCategory from './SubCategory';

const Category = (props) => {
    let subCategories = props.subCategories.map((subCategories) => {
        return (
            <SubCategory 
                key={subCategories.key}
                name={subCategories.name}
                current={subCategories.current}
                planned={subCategories.planned}
            />
        );
    });
    return (
        <div className="container category-container">
            <div className="row table-header">
                <div className="row-content">
                    <div className="column-4">
                        <div className="data">
                            {props.name}
                        </div>
                    </div>
                    <div className="column-4">
                        <div className="data">
                            Current
                        </div>
                    </div>
                    <div className="column-4">
                        <div className="data">
                            Planned
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row-content">
                    <div className="column-12">
                        <div className="data">
                            <br />
                            {subCategories}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row table-footer">
                <div className="row-content">
                    <div className="column-12">
                        <div className="data">
                            Add SubCategory
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;