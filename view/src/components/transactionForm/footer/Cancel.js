import React from 'react';
import { NavLink } from 'react-router-dom';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddFooter = props => {
    return (
                <div className="finalizing-column column-4">
                    <div className="finalizing-data data center">
                        <NavLink to={`/transaction/overview/`} activeClassName="selected">
                            <button className="trans-cancel" type="button" >
                                <FontAwesomeIcon icon="times" />
                            </button>
                        </NavLink>
                        
                    </div>
                </div>
    );
}

export default AddFooter;