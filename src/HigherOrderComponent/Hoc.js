import React from 'react';

const HigherOrderComponent = (NewComponent, NewComponent1) => {
    return class Jumping extends React.Component {
        state = {
            count: 0,
        }
        HandleIncrement = () => {
            this.setState({ count: this.state.count + NewComponent1 })
        }
        render() {

            return <NewComponent {...this.props} count={this.state.count} HandleIncrement={this.HandleIncrement} />
        }
    }
}
export default HigherOrderComponent;