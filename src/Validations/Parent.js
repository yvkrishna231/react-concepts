import React from 'react';
import Child1 from './Child1';

class Parent extends React.Component {
    state = {
        count: 10,
    }
    handleChange = () => {
        this.setState({ count: this.state.count + 5 })
    }
    render() {
        return (
            <div className='text-center text-primary mt-5'>
                <Child1 handleChange={this.handleChange} count={this.state.count} title='hello Venkata Krishna' />
            </div>
        )
    }
}
export default Parent;