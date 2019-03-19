import React from 'react';
import Category from './categories/Category';

const Categories = (props) => {
    //console.log(' Categories props');
    //console.log(props);

   let categories = [];
   for (let category in props.categories) {
    //console.log(category);
    //console.log(props.categories[category].id);
        categories.push (
            <Category 
                key={(props.categories[category].id || category)}
                id={(props.categories[category].id || category)} 
                category={props.categories[category].category} 
                current={props.categories[category].current} 
                planned={props.categories[category].planned}
                subcategories={props.categories[category].subcategories}
                displayOnClick={props.displayOnClick}
                putCategory={props.putCategory} 
                postSubcategory={props.postSubcategory}
                putSubcategory={props.putSubcategory} 
            />
        );
    };

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

