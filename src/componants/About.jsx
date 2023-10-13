import React from "react";
import Header from './Header';
import Navbar from './Nav';
import Footer from './Footer';
import styled from "styled-components";
import img from '../images/shopping-cart.avif';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    ${'' /* flex-wrap: wrap; */}
    justify-content: space-around;

    @media only screen and (max-width: 929px){
        display: flex;
        flex-wrap: wrap;
    }
`;

const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    font-size: 1.5rem;
    font-weight: bold;
`;

const AboutSection = styled.div`
    margin: 2rem;
    width: 50%;
`;

const ImageDiv = styled.div`
    width: 50%;

`;

const Image = styled.img`
    width: 40rem;
    padding: 4rem 0;
    display: flex:
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 929px){
        width: 20rem;
        width: 100%;
    }
`;

let About = () => {
    return (
        <>
                <Navbar />
                <Header />

                <Wrapper>
                    <AboutSection>
                        <Heading>About Us</Heading>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>   
                        <h5>Happy Shopping :)</h5>
                    </AboutSection>
                    <ImageDiv>
                        <Image src = {img} />
                    </ImageDiv>
                </Wrapper>

                <Footer />
        </>
    )
}

export default About;