import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './ErrorHandling/App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
// import HocApp from './HigherOrderComponent/HocApp';
import RoutingApp from './Routing/RoutingApp'

ReactDOM.render(<RoutingApp />, document.getElementById('root'));

serviceWorker.unregister();
