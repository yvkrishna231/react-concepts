import React from 'react';
import PropTypes from 'prop-types'
const Child1 = ({ title, count, handleChange }) => {
    return (
        <div>
            <h1>Hello World From Krishna</h1>
            <h3 className='text-info'>{title} - {count}</h3>
            <button className='btn btn-sm btn-success' onClick={handleChange}>Click Here</button>
        </div>
    )
}
export default Child1;
Child1.defaultProps = {
    title: 'Iam Now IN Default Props'
}
Child1.propTypes = {
    title: PropTypes.string,
    count: PropTypes.number,
    handleChange: PropTypes.func    
}
