import React,{ useContext } from "react";
import styled from "styled-components";
import { Context } from "./CartPage";

const Wrapper = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-Wrap: Wrap;
    width: 100%;
    align-items: center;
    text-align: center;

    @media only screen and (max-width: 860px){
        display: flex;
        flex-direction: column;
    }
`;

const Container = styled.div`
    width: 20%;

    @media only screen and (max-width: 860px){
        width: 50%;
    }

    @media only screen and (max-width: 390px){
        width: 10%;
    }

    @media only screen and (max-width: 391px){
        width: 90%;
    }
`;

const Image = styled.img`
    width: 40%;

    @media only screen and (max-width: 860px){
        margin: 2rem 0;
        width: 60%;
    }

    @media only screen and (max-width: 450px){
        margin: 2rem 0;
        width: 80%;
    }

    @media only screen and (max-width: 391px){
        width: 90%;
    }
`;

const Title = styled.h2`
    font-size: 1.1rem;
    font-weight: bold;
`;

const Para = styled.p`
    font-size: 0.9rem;
`;

const Quantity = styled.input`
    font-size: 0.9rem;
    max-width: 2rem;
    width: 100%;
    outline: none;
    text-align: center;
    margin: 0 1rem;

    @media only screen and (max-width: 860px){
        margin: 2rem 0;
    }
`;

const Price = styled.h2`
    font-size: 0.9rem;
    font-weight: bold;

    @media only screen and (max-width: 860px){
        margin: 2rem 0;
    }
`;

let CartProducts = (props) => {

    let  { removeItems, increment, decrease } = useContext(Context);

    return (
        <>
            <Wrapper>
                <Container>
                    <Image src = {props.img} ></Image>
                </Container>
                <Container>
                    <Title> {props.title} </Title>
                    <Para> {props.para} </Para>
                </Container>
                <Container>
                    <i className="fa-solid fa-plus" style={{cursor:'pointer',fontSize:'0.8rem',padding:'0 0.6rem'}} onClick = {() => increment(props.id) }></i><Quantity value = {props.quantity} readOnly/><i className="fa-solid fa-minus" style={{cursor:'pointer',fontSize:'0.8rem',padding:'0 0.8rem'}} onClick = {() => decrease(props.id)}></i>
                </Container>
                <Container>
                    <Price>Rs. {props.price} </Price>
                </Container>
                <Container>
                    <i className="fa-solid fa-trash" style = {{color: 'red', textAlign: 'center',cursor:'pointer'}} onClick = {() => removeItems(props.id)} />
                </Container>
            </Wrapper>
            <hr></hr>
        </>
    )
}

export default CartProducts;