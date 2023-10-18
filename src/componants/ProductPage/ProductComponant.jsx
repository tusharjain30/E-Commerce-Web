import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 20rem;
    height: 28rem;
    margin: 3rem auto;

    @media only screen and (max-width: 840px){
        height: 30rem;
    }

    @media only screen and (max-width: 840px){
        width: 100%;
        height: 30rem;
    }
`;

let ProductComponant = (props) => {
    return (
        <>
            
                <Card className="card">
                    <img src={props.img} className="card-img-top" alt="..." style = {{width:'100%', height: "300px"}}/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold">{props.title}</h6>
                        <p>(123 reviews)</p>
                        <p className="fw-bold">$<del>{props.prevPrice}</del> ${props.newPrice}</p>
                    </div>
                </Card>
            
        </>
    );
};

export default ProductComponant;
