import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';

const Home = (props) => {
    const {count}=props;
    return (
        <div>
          <h1>this home area</h1>  
          <h1>Count: {count}</h1> 
          <Category count={count}></Category> 
        </div>
    );
};

export default Home;