import React, { Component } from 'react';

import '../css/profile.css';

const jsonData = { 
    "budget": {
        "categories":[
            {
                "key": 1,
                "name": "Food",
                "subCategories": [
                    {
                        "key": 1,
                        "name": "Groceries",
                        "current": 300.00,
                        "planned": 400.00,
                    },
                    {
                        "key": 2,
                        "name": "Coffee",
                        "current": 30.00,
                        "planned": 0.00,
                    }
                ]
            },
            {
                "key": 2,
                "name": "Personal",
                "subCategories": [
                    {
                        "key": 1,
                        "name": "Clothing",
                        "current": 30.00,
                        "planned": 40.00,
                    },
                    {
                        "key": 2,
                        "name": "Phone",
                        "current": 200.00,
                        "planned": 200.00,
                    },
                    {
                        "key": 3,
                        "name": "Fun Money",
                        "current": 20.00,
                        "planned": 40.00,
                    },
                    {
                        "key": 4,
                        "name": "Hair/Cosmetics",
                        "current": 30.00,
                        "planned": 0.00,
                    },
                    {
                        "key": 5,
                        "name": "Subscriptions",
                        "current": 30.00,
                        "planned": 50.00,
                    }
                ]
            }
        ]
    } 
};

class Profile extends Component {
    render () {
        return (
            <div className="main-content">Profile page</div>
        );
    }
} 

export default Profile;