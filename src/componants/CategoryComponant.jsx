import React from 'react';
import './Categories.css';
import { NavLink } from 'react-router-dom';

let CategoryComponant = (props) => {
    return (
        <>
            <div className='cards'>
                    <div className="card">
                            <img src={props.items.image} className="card-img-top" alt="..." style={{width:'100%'}}/>
                            <div className="card-body">
                                    <h5 className="card-title">{props.items.title}</h5>
                                    <NavLink to = "products" className="btn btn-outline-primary">{props.items.btn}</NavLink>
                            </div>
                    </div>
            </div>
        </>
    );
};

export default CategoryComponant;