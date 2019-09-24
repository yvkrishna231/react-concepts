import React, { Component } from 'react'
import { DataConsumer } from '../DataContext'

export default class ContextTypeOne extends Component {
    render() {
        return (
            <div>
                <h5>Component One</h5>
                <DataConsumer>
                    {
                        dataConsumer => (
                            <div>
                                {dataConsumer.data && dataConsumer.data.map((val, ind) => {
                                    return (
                                        <h6 className="text-danger" key={ind}>{val}</h6>
                                    )
                                })}
                            </div>
                        )
                    }
                </DataConsumer>

            </div>
        )
    }
}
