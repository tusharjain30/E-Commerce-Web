import React, { useContext } from 'react';
// import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { Context } from './CartPage';


// const Navbar = styled.nav`
// display: flex;
// height: 60px;
// padding: 0.8rem 1.4rem;
// align-items: center;
// justify-content: center;
// background-color: #f6f7f7;
// `;

// const Left = styled.div`
// display: flex;
// flex: 1;
// height: 1.6rem;
// align-items: center;
// justify-content: start;
// `;

// const Center = styled.div`
// flex: 1;
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: 1.4rem;
// font-weight: bold;
// letter-spacing: 1px;
// cursor: pointer;
// `;

// const Right = styled.div`
// flex: 1;
// display: flex;
// align-items: center;
// justify-content: end;
// `;

// const Language = styled.div`
// font-size: 1.2rem;
// padding: 0 0.9rem;
// `;

// const Search = styled.div`
// border: 1px solid black;
// display: flex;
// align-items: center;
// justify-content: center;
// `;


// const Input = styled.input`
//  padding: 0 0.8rem;
//  border: none;
//  outline: none;
// `;

// const SearchIcon = styled.div`
// display: flex;
// font-size: 1rem;
// padding: 4px;
// align-items: center;
// justify-content: center;
// color: gray;
// cursor: pointer;
// `;

// const MenuItem = styled.div`
// display: flex;
// font-size: 0.8rem;
// padding: 0.5rem 0.8rem;
// cursor: pointer;
// font-weight: bold;
// align-items: center;
// justify-content: center;
// `;

let Nav = () => {
    
    let totalItems = useContext(Context);


    return (
        <>
           
               
<nav className="navbar navbar-expand-lg navbar navbar-light" style = {{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">
    <NavLink to = "/" className="navbar-brand m-auto px-5 fw-bold" style = {{letterSpacing:"0.2rem"}}>ShoppinglyX ;)</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <NavLink to = "/" className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink to = "/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink to = "/contact" className="nav-link">Contact</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink to = "/products" className="nav-link" >Product</NavLink>
        </li>
         <li className="nav-item px-3">
             <NavLink to = "/cart" className="nav-link"  style={{fontSize:'1.1rem'}}>Cart<span className = "mx-1 badge bg-warning" >{totalItems == 'undefined' ? 7: totalItems}</span></NavLink>
         </li>
      </ul>
    </div>
  </div>
</nav>
            
        </>
    );
};

export default Nav;




 {/* <Navbar className="fixed-top">
                    <Left>
                        <Language>EN</Language>
                        <Search>
                            <Input></Input>
                            <SearchIcon><i className="fa-solid fa-magnifying-glass"></i></SearchIcon>
                        </Search>
                    </Left>
                    <Center style = {{letterSpacing:"0.5rem"}}>ShoppinglyX</Center>
                    <Right>
                        <MenuItem><NavLink to = "/">HOME</NavLink></MenuItem>
                        <MenuItem><NavLink to = "/about">ABOUT</NavLink></MenuItem>
                        <MenuItem><NavLink to = "/contact">CONTACT</NavLink></MenuItem>    
                        <MenuItem><NavLink to = "/products">PRODUCTS</NavLink></MenuItem>    
                        
                        { 
                                
                                <MenuItem style={{fontSize:'1.4rem'}}><NavLink to = "cart">🛒</NavLink></MenuItem>
                                :<MenuItem style={{fontSize:'1.4rem'}}><NavLink to = "cart"></NavLink><p style={{fontSize:15,backgroundColor:'#4DBFD8',padding:'3px 10px',borderRadius:'50%'}}>{totalItems}</p></MenuItem>
                        }
                    </Right>
                </Navbar> */}