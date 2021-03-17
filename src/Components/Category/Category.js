import React, { useState } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Category = (props) => {
    
    const {count}=props;
    return (
        <div>
            <h3>This is your category</h3>
            <CategoryDetail count={count}></CategoryDetail>
        </div>
    );
};

export default Category;