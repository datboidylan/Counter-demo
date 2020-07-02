import React, { Component } from'react';         // (1)

export default class Header extends Component {   // (2)
    render() {                                    // (3)
        return (
        <div className="header">
            <h1>Counter App</h1>
        </div>
        );    
    }
}