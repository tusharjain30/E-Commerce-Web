import React,{ useState } from "react";
import styled from 'styled-components';
import ProductComponant from "./ProductComponant";
import ProductData from "./ProductData";

// sidebar ------------------------->
const Container = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: #f6f7f7;
    border-left: 2px solid lightgray;
    width: 20%;
    padding: 0 1rem;
    justify-content: center;
    margin: -6rem 2rem;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media only screen and (max-width: 622px){
        position: static;
        bootom: 0;
        width: 100%;
    }
`;

const Category = styled.div`
    width: 100%;

    .Categories{
        font-size: 0.9rem;
        letter-spacing: 1px;

        @media only screen and (max-width: 622px){
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

const Button = styled.div`
    margin: 1.2rem 0;
    letter-spacing: 0.1rem;
    font-size: 0.9rem;
`;

const Heading = styled.h3`
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
`;

// Items Page bar------------------------------->
const Wrapper = styled.div`
    width: 70%;
    margin: 3rem;
`;

const RecommendHeading = styled.h5`
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 0 1.7rem;
`;

const CategoryBox = styled.div`
    display: flex;
    width: 100%;
    margin: 0 1rem;

    @media only screen and (max-width: 840px){
        display: flex;
        width: 40%;
        flex-direction: column;
    }

    @media only screen and (max-width: 620px){
        width: 100%;
        text-align: center;
    }
`;

const Box = styled.h4`
    font-size: 0.9rem;
    border: 1px solid gray;
    padding: 0.3rem 1.3rem;
    cursor: pointer;
    margin: 0.9rem 0.6rem;
    letter-spacing: 2px;
    transition: all 0.4s ease-in-out;

    &:hover{
        background-color: black;
        color: white;
    }
`;

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
`;


let MainPage = () => {

    const [item, setItem] = useState(ProductData);
    
    let Filter = (company) => {
        let updateItem = ProductData.filter((curVal) => {
            return curVal.company == company;
        })
        setItem(updateItem);
    }

    let CategoryFilter = (category) => {
        let updateItem = ProductData.filter((curVal) => {
            return curVal.category == category;
        })
        setItem(updateItem);
    }

    let Color = (color) => {
        let updateItem = ProductData.filter((curVal) => {
            return curVal.color == color;
        })
        setItem(updateItem);
    }

    return (
        <>
            <Wrapper>
                <RecommendHeading>Recommended</RecommendHeading>
                <CategoryBox>
                    <Box onClick = {() => setItem(ProductData)}>All Product</Box>
                    <Box onClick = {() => Filter("Nike")}>Nike</Box>
                    <Box onClick = {() => Filter("Addidas")}>Addidas</Box>
                    <Box onClick = {() => Filter("Puma")}>Puma</Box>
                    <Box onClick = {() => Filter("Bata")}>Bata</Box>
                </CategoryBox>

                <Flex>
                {
                    item.map((curVal,index) => {
                        return <ProductComponant
                            key = {index} 
                            img = {curVal.img}
                            title = {curVal.title}
                            review = {curVal.reviews} 
                            prevPrice = {curVal.prevPrice} 
                            newPrice = {curVal.newPrice}    
                            />
                    })
                }
                  
                </Flex>

            </Wrapper>

            <Container>
                    <Category>
                        <Heading>Category</Heading>
                        <Button onClick = {() => setItem(ProductData)} className="btn btn-warning w-100">All</Button>
                        <Button onClick = {() => CategoryFilter("Sneaker") } className="btn btn-warning w-100">Sneakers</Button>
                        <Button onClick = {() => CategoryFilter("Shoes") } className="btn btn-warning w-100">Shoes</Button>
                        <Button onClick = {() => CategoryFilter("Sandal") } className="btn btn-warning w-100">Sandals</Button>
                        <Button onClick = {() => CategoryFilter("Heel") } className="btn btn-warning w-100">Heels</Button>
                    </Category>
  
                </Container>

        </>
    );
};

export default MainPage;