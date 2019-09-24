import React, { Component } from 'react';
import DataContext from '../DataContext'

export default class ContextTypeTwo extends Component {
    static contextType = DataContext;
    render() {
        return (
            <div>
                <h5>Component Two</h5>
                <p className="text-success">{this.context.title}</p>
            </div>
        )
    }
}
