import React, { useState } from 'react';

const Header = (props) => {
   const {count,handleIns}=props;
   
    return (
        <div>
            <h1>this is header</h1>
            <h1>Count: {count}</h1>
            <button onClick={handleIns}> Increment</button>


        </div>
    );
};

export default Header;
