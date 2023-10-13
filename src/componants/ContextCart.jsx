import React,{ useContext } from 'react';
import styled from 'styled-components';
import CartProducts from './CartProducts';
import { Context } from './CartPage';

const Wrapper = styled.div`
    margin: 3rem;
`;

const Heading = styled.h3`
    padding: 0 1rem;
    font-weight: bold;
    font-size: 1.7rem;

    @media only screen and (max-width: 374px){
        font-size: 1.4rem;
    }
`;

const Para = styled.p`
    padding: 0 1rem;
    font-size: 1rem;

    @media only screen and (max-width: 374px){
        font-size: 0.8rem;
    }
`;

const Container = styled.div`
    max-width: 100%;
    width: 90rem;
    margin: 2rem auto;
    height: auto;
`;

const TotalPrice = styled.h4`
    padding: 0 12rem;
    padding-bottom: 4rem;
    text-align: right;
    font-size: 1.2rem; 

    @media only screen and (max-width: 860px){
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media only screen and (max-width: 450px){
        display: flex;
        flex-direction: column;
    }
`;

const CartTitle = styled.div`
    width: 90%;

    @media only screen and (max-width: 450px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const DeleteAllBtn = styled.div`
    width: 10%;

    @media only screen and (max-width: 450px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
    }
`;

let ContextCart = () => {

    let {items,totalItems, totalAmount, clearCart} = useContext(Context);

    return (
        <>
             <Wrapper>
             <Row>
                <CartTitle>
                    <Heading>Shopping Cart</Heading>
                    <Para>You Have {totalItems} Items In Shopping Cart</Para>
                </CartTitle>
                <DeleteAllBtn>
                    <button className='btn btn-danger' style = {{display:'flex',alignItems:'right'}} onClick = {() => {clearCart()}}>Clear Cart</button>
                </DeleteAllBtn>
                 </Row>
               
                <Container>
                    <div className="shadow p-3 mb-5 bg-body rounded">
                    {
                        items.map((items, index) => {
                            return <CartProducts key = {index} id = {items.id} img = {items.img} title = {items.title} para = {items.para} price = {items.price} quantity = {items.quantity} />
                        })
                    }
                    </div>
                </Container>
             </Wrapper>   
            <hr></hr>
            <TotalPrice>Card Total : <span className="badge bg-warning text-dark" style = {{fontWeight: 'bold'}}><i className="fa-solid fa-indian-rupee-sign"></i>{ totalAmount }</span></TotalPrice>
        </>
    )
}

export default ContextCart;