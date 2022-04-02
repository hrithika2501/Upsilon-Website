import styled from "styled-components";

import {Link} from 'react-router-dom'

export const HeroContainer = styled.div `
background-color: transparent ;
height: 100vh;
width: 100vw ;
`;

export const HeroContent = styled.div `
background-color: transparent ;
height: 80vh;
/* max-height: 100%; */
width: 100%;
/* padding: 0rem calc((100vw-1300px)/2); */
display: flex;
justify-content: space-between;
align-items: center;
`;

export const NavSide = styled.div `
margin-top:5em ;
margin-left: 1.2em ;
background-color: transparent ;
height: 95%;
display: flex;
flex-direction: column ;
justify-content: space-between;
align-items: center ;
width: 80px;

@media screen and (max-width: 768px){
    display: none ;
}

`;

export const Top = styled.div `
height:100%;
display: flex;
flex-direction: column ;
justify-content: center;
align-items: center;
`;

export const Hou = styled (Link) `
width: 15px ;
height: 15px;
margin-bottom: 2em;
color: #fff;
&:hover{
color: blue;
}
`;
export const Down = styled (Link) `
width: 15px ;
height: 15px;
/* margin-bottom: 2em; */
color: red;
&:hover{
color: blue;
}
`;


export const HeroItems = styled.div `

width: 85vw ;
height: 60vh;
margin-top:-2em ;
margin-left: 3em ;
display: flex ;
flex-direction: column ;
justify-content: flex-start ;
align-items: flex-start ;

@media screen and (max-width: 430px){
    height: 65vh ;
    margin-top:0 ;
    margin-left: 5em ;
}
`;

export const Product1 = styled.div `
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100% ;
line-height: 1;
margin-bottom:2em ;
`;

export const ForButton=styled.div`
display: flex ;
width: 80vw ;
justify-content: space-between ;
`;
export const H1 = styled.h1 `
font-family: 'Inter';
font-size: clamp(1rem, 10vw, 1.75rem);
margin-bottom: 0.5rem;
color: #fff;
font-weight: 600;
`;

export const Button=styled.button `
font-size: 1.2rem;
padding: 0.5rem 3rem;
border: none;
background: #2F7BEA;
font-family: 'Inter', sans-serif;
color: #fff;
transition: 0.2s ease-out;
/* margin-left: 0.5em; */
font-weight: 600;
float: left ;
margin-bottom: 0em;

&:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`;
export const P = styled.p `
font-family: 'Inter';
font-size: clamp(0.6rem, 2.5vw, .85rem);

margin-bottom: 1.5rem;
color: #fff;
font-weight: 500;
`;

export const ProductCard = styled.div `
width: 75vw;
display: grid ;
grid-template-columns: 140px 140px 140px 140px 140px;
grid-gap: 5em;

@media screen and (max-width: 1024px){
    grid-template-columns: 140px 140px 140px 140px;
    grid-gap: 3em ;
    }
    @media screen and (max-width: 768px){
        width: 80%;
    grid-template-columns: 140px 140px 140px;

    }
    @media screen and (max-width: 430px){
        /* height: 70vh ; */
        width: 40%;
    grid-template-columns: 140px 140px;
    /* align-items:center ;
    justify-content: flex-start ; */

    }



`;

export const ProductWrapper=styled.div`
/* margin: 0 2rem; */
line-height: 1;
width: 140px;
height:155px ;
background-color: #292525 ;
transition:height 0.5s; 
-webkit-transition:height 0.5s; 
cursor: pointer;


`;
export const Head=styled.h2`
font-weight: 400;
font-size: 1rem;
margin-top: 0.5em ;
margin-bottom: 0.5em ;
color: white;
background-color: transparent ;
text-align: center ;
cursor: pointer;

&:hover {
    color: blue;
}
`;
export const Desc=styled.p`
font-size: 0.8rem;
margin-bottom: 1rem;
color:white;
background-color: transparent ;
text-align: center ;
`;
export const Img = styled.img `
height: 100px;
min-width:140px;
max-width: 100%;

`;

export const Product2 = styled.div `

`;

export const H2 = styled.h1 `
font-family: 'Inter';
font-size: clamp(1rem, 10vw, 1.75rem);
margin-bottom: 1rem;
color: #fff;
font-weight: 600;
`;

export const Button2=styled.button `
font-size: 1.2rem;
padding: 0.5rem 3rem;
border: none;
background: #2F7BEA;
font-family: 'Inter', sans-serif;
color: #fff;
transition: 0.2s ease-out;
/* margin-left: 0.5em; */
font-weight: 600;
float: left ;
margin-bottom: 1.8em;

&:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`;


