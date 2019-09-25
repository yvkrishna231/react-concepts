import React from 'react';
import HigherOrderComponent from './Hoc';

class HocChildOne extends React.Component {

    render() {
        const { HandleIncrement, count, text } = this.props
        return (
            <div className='mb-3'>
                <h3>Component One - {text}</h3>
                <button onMouseOver={HandleIncrement} className='btn btn-sm btn-success'>Count {count}  </button>
            </div>
        )
    }
}
export default HigherOrderComponent(HocChildOne, 10);