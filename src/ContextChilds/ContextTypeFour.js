import React, { Component } from 'react'
import DataContext from '../DataContext';
export default class ContextTypeFour extends Component {
    render() {
        return (
            <div>
                <h1>{this.context.title}</h1>
            </div>
        )
    }
}

ContextTypeFour.contextType = DataContext;