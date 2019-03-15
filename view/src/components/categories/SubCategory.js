import React from 'react';

const SubCategory = (props) => {
    //console.log(props.key);
    return (
        <div key={props.id} className="container">
            <div className="row">
                <div className="row-content">
                    <div className="column-4">
                        <div className="data">
                            {props.subcategory}
                        </div>
                    </div>
                    <div className="column-4">
                        <div className="data number-data">
                            {(props.current || 0)}
                        </div>
                    </div>
                    <div className="column-4">
                        <div className="data number-data">
                            {(props.planned || 0)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;