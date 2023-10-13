import React from 'react';
import styled from 'styled-components';

const ContainerOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FCF5F5;
    width: 100%;
    padding: 5rem;
    height: 70%;

    @media only screen and (max-width: 661px){

    }
`;

const ContainerTwo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    padding: 5rem;
    height: 70%;

    @media only screen and (max-width: 930px){
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
    }
`;

const Heading = styled.h1`
    font-size: 3rem;

    @media only screen and (max-width: 661px){
        font-size: 2rem;
        font-weight: bold;
    }

    @media only screen and (max-width: 352px){
        font-size: 1.5rem;
    }
`;

const Para = styled.p`
    width: 100%;
    font-weight: bold;
    padding: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 661px){
        font-size: 0.9rem;
    }

    @media only screen and (max-width: 352px){
        font-size: 0.6rem;
    }
`;

const EmailInput = styled.form`
    display: flex;
`;

const Input = styled.input`
    max-width: 90%;
    width: 30rem;
    padding: 0.1rem 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;

    @media only screen and (max-width: 661px){
        padding: 0;
        width: 14rem;
    }

    @media only screen and (max-width: 352px){
        font-size: 0.7rem;
    }
`;

const Button = styled.button`
    background-color: #01807F;
    color: white;
    padding: 0.2rem 1.4rem;
    border: none;
    transition: all 0.5s ease;


    &:hover{
        color: black;
        border-style: solid;
        border-color: #01807F;
        background-color: white;
        color: #01807F;
    } 
`;

const FooterDiv = styled.div`
    width: 25%;
    padding: 0.2rem;

    @media only screen and (max-width: 930px){
        width: 100%;
    }
`;

const FooterHeading = styled.h1`
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;

    @media only screen and (max-width: 930px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Link = styled.div`
    padding-top: 0.8rem;
    cursor: pointer;

    @media only screen and (max-width: 930px){
        margin-bottom: 3rem;
    }
`;

const FooterParaOne = styled.p`
    color: gray;
    display: flex;
    font-size: 0.9rem;

    @media only screen and (max-width: 930px){
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 352px){
        font-size: 0.7rem;
    }
    
`;

const FooterDivOne = styled.footer`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.8rem;

    @media only screen and (max-width: 376px){
        font-size: 0.6rem;
    }
`;


let Footer = () => {

    let year = new Date().getFullYear();

    return (
        <>
            <ContainerOne>
                <Heading>Newsletter</Heading>
                <Para>Get timely updates from your favourite products</Para>
                <EmailInput action = "https://formspree.io/f/xpzgokwa" method = "POST">
                        <Input placeholder = "Your Email" name = "Email" required autoComplete='off'/>
                        <Button><i className="fa-solid fa-paper-plane"></i></Button>
                </EmailInput>
            </ContainerOne>

            <ContainerTwo>
            <FooterDiv>
                    <FooterHeading>ShoppinglyX</FooterHeading>
                    <Link>
                        <FooterParaOne>Fashion</FooterParaOne>
                        <FooterParaOne>Brands</FooterParaOne>
                        <FooterParaOne>Fashion Shoes</FooterParaOne>
                        <FooterParaOne>All Products</FooterParaOne>
                        <FooterParaOne>Free Shipping</FooterParaOne>
                    </Link>
            </FooterDiv>
                <FooterDiv>
                    <FooterHeading>Useful Links</FooterHeading>
                    <Link>
                        <FooterParaOne>Home</FooterParaOne>
                        <FooterParaOne>Man Fashion</FooterParaOne>
                        <FooterParaOne>Accessories</FooterParaOne>
                        <FooterParaOne>Order Tracking</FooterParaOne>
                        <FooterParaOne>Wishlist</FooterParaOne>
                    </Link>
                </FooterDiv>
                <FooterDiv>
                    <FooterHeading>Details</FooterHeading>
                    <Link>
                        <FooterParaOne>Cart</FooterParaOne>
                        <FooterParaOne>Women Fashion</FooterParaOne>
                        <FooterParaOne>Accessories</FooterParaOne>
                        <FooterParaOne>Order Tracking</FooterParaOne>
                        <FooterParaOne>Wishlist</FooterParaOne>
                    </Link>
                </FooterDiv>
                <FooterDiv>
                    <FooterHeading>Contact</FooterHeading>
                    <Link>
                        <FooterParaOne><i className="fa-solid fa-location-dot" style = {{padding:'4px 0.4rem'}}></i> 622 Dixie Path, India 98336</FooterParaOne>
                        <FooterParaOne><i className="fa-solid fa-phone" style = {{padding:'4px 0.4rem'}}></i> +1 234 56 78</FooterParaOne>
                        <FooterParaOne><i className="fa-solid fa-envelope" style = {{padding:'4px 0.4rem'}}></i> Contact@shoppinglyX</FooterParaOne>
                        <FooterParaOne>www.shoppinglyx.com</FooterParaOne>
                        <FooterParaOne>Terms</FooterParaOne>
                    </Link>
                </FooterDiv>
              
            </ContainerTwo>

            <FooterDivOne className='bg-dark'>&copy; {year} Tushar Jain. All Rights Reserved | Terms and Conditions</FooterDivOne>

        </>
    );
};

export default Footer;