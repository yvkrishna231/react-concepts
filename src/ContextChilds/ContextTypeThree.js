import React, { useContext } from 'react';
import DataContext from '../DataContext';

const ContextTypeThree = () => {
    const contextData = useContext(DataContext);
    return (
        <div>
            <h5>Component 3</h5>
            <button onClick={contextData.handleUpdate}  className="btn btn-sm btn-warning" >Update</button>
        </div>
    )
}
export default ContextTypeThree;