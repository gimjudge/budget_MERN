import React from 'react';

const SubCategory = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="row-content">
                    <div className="column-4">
                        <div className="data">
                            {props.name}
                        </div>
                    </div>
                    <div className="column-4">
                        <div className="data number-data">
                            {props.current}
                        </div>
                    </div>
                    <div className="column-4">
                        <div className="data number-data">
                            {props.planned}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;