import React from 'react';
import SubCategory from './SubCategory';

const Category = (props) => {
    /*
    let subCategories = props.subCategories.map((subCategories) => {
        return (
            <SubCategory 
                key={subCategories.if}
                name={subCategories.subcategory}
                current={subCategories.current}
                planned={subCategories.planned}
            />
        );
    });
    */

    let subcategories = [];

    for (let subcategory in props.subcategories) {
    //console.log(category);
        subcategories.push (
            <SubCategory 
                key={(props.subcategories[subcategory].id || subcategory)} 
                id={(props.subcategories[subcategory].id || subcategory)} 
                subcategory={props.subcategories[subcategory].subcategory} 
                current={props.subcategories[subcategory].current} 
                planned={props.subcategories[subcategory].planned}
            />
        );
    };
    return (
        <div key={props.id} className="container category-container">
            <div className="row table-header">
                <div className="row-content">
                    <div className="column-4">
                        <div className="data">
                            {props.category}
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
                            {subcategories}
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