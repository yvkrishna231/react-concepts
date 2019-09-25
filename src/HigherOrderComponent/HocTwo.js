import React from 'react';
import HigherOrderComponent from './Hoc';

class HocChildTwo extends React.Component {
    render() {
        const { HandleIncrement, count, text } = this.props
        return (
            <div className='mb-3'>
                <h4>Component Two - {text}</h4>
                <button onClick={HandleIncrement} className='btn btn-sm btn-danger'>Count {count}</button>
            </div>
        )
    }
}
export default HigherOrderComponent(HocChildTwo, 5);
