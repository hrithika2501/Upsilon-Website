import styled from "styled-components";
import House from '../../images/house.svg'
import Box from '../../images/box.svg'
import File from '../../images/file.svg'
import Mark from '../../images/mark.svg'
import Logout from '../../images/logout.svg'

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
margin-left: 2.5em ;
background-color: transparent ;
height: 90%;
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

export const Hou = styled.div `
width: 15px ;
height: 15px;
margin-bottom: 2em;
background: url(${House}) no-repeat;
background-size: cover;
background-position: center;
`;
export const Bo = styled.div `
width: 15px ;
height: 15px;
margin-bottom: 2em;
background: url(${Box}) no-repeat;
background-size: cover;
background-position: center;
`;
export const Fil = styled.div `
width: 15px ;
height: 15px;
margin-bottom: 2em;
background: url(${File}) no-repeat;
background-size: cover;
background-position: center;
`;
export const Mar = styled.div `
width: 15px ;
height: 15px;
background: url(${Mark}) no-repeat;
background-size: cover;
background-position: center;
`;

export const Down = styled.div `
width: 15px ;
height: 15px;
margin-bottom: -2em ;
background: url(${Logout}) no-repeat;
background-size: cover;
background-position: center;
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
margin-bottom:1.5em ;
`;
export const H1 = styled.h1 `
font-family: 'Inter';
font-size: clamp(1rem, 10vw, 1.75rem);
margin-bottom: 0.5rem;
color: #fff;
font-weight: 600;
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
export const Img = styled.img `
height: 140px;
min-width:140px;
max-width: 100%;
`;

export const Product2 = styled.div ``;

export const H2 = styled.h1 `
font-family: 'Inter';
font-size: clamp(1rem, 10vw, 1.75rem);
margin-bottom: 1rem;
color: #fff;
font-weight: 600;
`;

