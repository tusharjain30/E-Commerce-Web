import React from "react";
import Header from '../Header';
import Navbar from '../Nav';
import MainPage from './MainPage';
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 100%;
    display:  flex;
    flex-wrap: wrap;
`;


let Products = () => {
    return (
        <>
                <Navbar />
                <Header />
                <Wrapper>
                        <MainPage />
                </Wrapper>
        </>
    )
}

export default Products;