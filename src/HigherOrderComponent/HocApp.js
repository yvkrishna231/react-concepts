import React, { Component } from 'react'
import HocOne from './HocOne';
import HocTwo from './HocTwo';

export default class HocApp extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-5 m-auto'>
                        <div className='card card-body'>
                            <h3 className='mb-3 text-danger'>HIGHER ORDER COMPONENT</h3>
                            <div className='text-center'>
                                <HocOne text='value' />
                                <HocTwo text='value' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
