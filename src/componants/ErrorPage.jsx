import React from "react";
import Header from './Header';
import Navbar from './Nav';
import Footer from './Footer';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
`;

const HeadingOne = styled.h1`
    font-size: 5rem;
`;

const HeadingTwo = styled.h2`
    font-size: 2rem;
`;

const Para = styled.p`
    font-size: 0.9rem;
    padding: 1rem;
`;


let ErrorPage = () => {
    return (
        <>
             <Navbar />
             <Header />

            <Wrapper>
                <HeadingOne>404</HeadingOne>
                <HeadingTwo>UH OH! You're lost.</HeadingTwo>
                <Para>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</Para>
                <NavLink to = "/"><button className="btn btn-info">Home</button></NavLink>
            </Wrapper>

             <Footer />
        </>
    )
}

export default ErrorPage;