import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const category=useContext(CategoryContext)

   // const {count}=props;
    return (
        <div>
            <h3>This is your category details:{category}</h3>
            <h5>selected category:{category}</h5>

        </div>
    );
};

export default CategoryDetail;