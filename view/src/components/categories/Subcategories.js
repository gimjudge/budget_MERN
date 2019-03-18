import React from 'react';
import Subcategory from './Subcategory';

const Subcategories = (props) => {

    let subcategories = [];

    for (let subcategory in props.subcategories) {
    //console.log(category);
        subcategories.push (
            <Subcategory 
                key={(props.subcategories[subcategory].id || subcategory)} 
                categoryID={props.categoryID}
                id={(props.subcategories[subcategory].id || subcategory)} 
                subcategory={props.subcategories[subcategory].subcategory} 
                current={props.subcategories[subcategory].current} 
                planned={props.subcategories[subcategory].planned}
                displayOnClick={props.displayOnClick} 
                putSubcategory={props.putSubcategory} 
            />
        );
    };
    return (
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
    );
};

export default Subcategories;