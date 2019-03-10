import React from 'react';

const PageTitle = props => {
    return (
        <div className="row">
            <div className="row-content">
                <div className="column-12">
                    <div className="data">
                        <h1 className="main-title">{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;