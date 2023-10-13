import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


let ProductsSlider = (props) => {

    let options = {
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        animateOut:"slideOutUp",
        nav:true,
        dots:false,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    };

    return (
        <>
            <OwlCarousel className='owl-theme' {...options} >
                {
                    props.items.map((items, index) => {
                        return(
                            <div  key = {index} className='item' style={{margin:'10px',cursor:'pointer'}}>
                                <img src={items.img}  style = {{height:props.height,objectFit:'cover'}}/>
                                <h6 style={{padding: '8px 0',fontWeight:'bold'}}>{items.title}</h6>
                                <p>{items.price}</p>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </>
    );
}

export default ProductsSlider;