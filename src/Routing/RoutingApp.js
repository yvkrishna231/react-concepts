import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App';
import ErrorApp from '../ErrorHandling/ErrorApp'
import HocApp from '../HigherOrderComponent/HocApp'
import NavItems from './NavItems';
class RoutingApp extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <BrowserRouter>
                        <NavItems />
                        <Switch>
                            <Route exact path='/' component={App} />
                            <Route path='/error' component={ErrorApp} />
                            <Route path='/hoc' component={HocApp} />
                        </Switch>
                    </BrowserRouter>
                </Fragment>
            </div>
        )
    }
}
export default RoutingApp;