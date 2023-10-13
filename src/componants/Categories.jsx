import React from 'react';
import CategoryItems from './CategoryItems';
import CategoryComponant from './CategoryComponant';
import './Categories.css';

let Categories = () => {


    return (
        <>

            <div className='container'>

                {
                    CategoryItems.map((items, index) => {
                        return <CategoryComponant items = {items} key = {index}/>
                    })
                }

            </div>
        </>
    );
};

export default Categories;