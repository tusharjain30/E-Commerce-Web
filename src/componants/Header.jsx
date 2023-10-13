import React from 'react';
import styled from 'styled-components';

const Headbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 30px;
background-color: #01807F;
color: white;
padding: 8px 0;
font-size: 0.9rem;

@media only screen and (max-width: 388px){
    font-size: .65rem;
}
`;


let Header = () => {

    return (
        <Headbar>Super Deal Free Shipping on Orders Over $50</Headbar>
    )
}

export default Header;