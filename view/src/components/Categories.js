import React from 'react';
import Category from './categories/Category';

const Categories = (props) => {
    
    //console.log(props);
    let categories = props.categories.map ((category) => {
        console.log(category);
        return (
            <Category 
                key={category.key} 
                name={category.name} 
                current={category.current} 
                planned={category.planned}
                subCategories={category.subCategories}
            />
        );
    });

    return (
        <div className="table-container">
            <div className="table-row">
                <div className="table-row-content">
                    <div className="table-column">
                        <div className="table-data">
                            {categories}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;

