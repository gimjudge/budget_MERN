import React from 'react';

import CategoryHeader from './CategoryHeader';
import Subcategories from './Subcategories';
import CategoryFooter from './CategoryFooter';

const Category = (props) => {
    //console.log('props');
    //console.log(props);
    return (
        <div key={props.id} className="container category-container">
            <CategoryHeader id={props.id} category={props.category} />
            <Subcategories 
                categoryID={props.id} 
                subcategories={props.subcategories}
                displayOnClick={props.displayOnClick}
                putSubcategory={props.putSubcategory} 
            />
            <CategoryFooter 
                id={props.id} 
                category={props.category} 
                displayOnClick={props.displayOnClick} 
                postSubcategory={props.postSubcategory} 
            />
        </div>
    );
};

export default Category;