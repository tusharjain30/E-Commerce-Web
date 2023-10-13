import React from "react";
import Header from './Header';
import Navbar from './Nav';
import Footer from './Footer';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;

    .input_class{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        max-width: 60%;
        width: 50rem;
        margin: 2rem auto;
    }

    .inputType,textarea{
        outline: none;
        padding: 0 0.5rem; 
    }
`;

const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    font-size: 1.8rem;
    font-weight: bold;
`;

let Contact = () => {
    return (
        <>
                <Navbar />
                <Header />
                <Heading>Contact Us</Heading>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6921.599460299807!2d77.39313484162173!3d29.84120200641342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e921779b5168d%3A0x6a91381d38dbfb8b!2sIslam%20Nagar%2C%20Uttar%20Pradesh%20247451!5e0!3m2!1sen!2sin!4v1696553718958!5m2!1sen!2sin"
                 width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <Wrapper>
                    <form action = "https://formspree.io/f/xpzgokwa" method = "POST" className="input_class">
                        <input type="text" name = "Username" placeholder="Enter Username" required autoComplete="off" className="inputType"/>
                        <input type="email" name = "Email" placeholder="Enter Email" required autoComplete="off" className="inputType"/>
                        <textarea cols = "30" rows="5" name = "Message" required autoComplete="off" placeholder="Enter a Message"></textarea>
                        <input type = "submit" className="btn btn-warning" />
                    </form>
                </Wrapper>
                <Footer />
        </>
    )
}

export default Contact;