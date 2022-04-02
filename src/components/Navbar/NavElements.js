

import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import Logos from '../../images/logo.png'
import Sea from '../../images/search2.svg'
import Bel from '../../images/bell2.svg'
import Prof from '../../images/pp.png'

export const Nav = styled.nav`
    background: transparent;
    display: flex;
    justify-content: space-between;
    height: 80px ;
    width: 100% ;
   
`;

export const Left = styled.div`
width:32.5% ;
display: flex;
justify-content: space-between;
align-items: center;


@media screen and (max-width: 968px){
        width: 40%;
    }
    @media screen and (max-width: 768px){
        width: 50%;
    } 

    @media screen and (max-width: 620px){
        width: 65% ;
    }
   
    @media screen and (max-width: 470px){
        width: 75% ;
    }
    @media screen and (max-width: 430px){
        width: 70% ;
    }
`;

export const Logo = styled.div`

width: 80px ;
height:80px ;
margin-top:2.5em ;
margin-left:1.2em ;
background: url(${Logos}) no-repeat;
background-size: cover;
background-position: center;
`;

export const Icon = styled.div`
margin-top:2em ;
/* margin-left: 2em; */
display:flex ;
justify-content: space-between ;
align-items: flex-end ;

@media screen and (max-width: 1024px){
    margin-left: 2em ;
}
`;
export const Search=styled.div`
width: 15px ;
height: 15px;
background: url(${Sea}) no-repeat;
background-size: cover;
background-position: center;
`;

export const Text= styled.p`
/* color: #CCCCCC ;
font-family: 'Inter' ; */
margin-left:0.5em ;
padding-right:3em;

border-bottom: 1px solid #BCBCBC ;

input {
    color: #CCCCCC ;
font-family: 'Inter' ;
border: 0px solid ;
background-color: transparent ;
}
input:focus{
    outline: none ;
}
`;

export const Right = styled.div`
margin-right: 1em;
width:10%;
display:flex ;
justify-content: space-around ;
align-items: flex-end ;
@media screen and (max-width: 768px){
        width: 15%;
        margin-right: 4em ;
    } 
    @media screen and (max-width: 530px){
        margin-right:0 ;
    }
    @media screen and (max-width: 470px){
        margin-right: -4em ;
    }
    @media screen and (max-width: 430px){
        width: 20%;
    }

`;

export const Bell=styled.div`
width: 15px ;
height: 20px;
margin-bottom:.75em ;
color: #fff;
&:hover{
    color: blue;
}


`;

export const Profile= styled.div`
width: 42px ;
height: 45px;
background: url(${Prof}) no-repeat;
background-size: cover;
background-position: center;

`;

export const MobileIcon = styled.div `
display: none;
@media screen and (max-width: 768px){
     background-color: transparent ;
display: block;
position: absolute;
top:0.75em;
right:0;
cursor:pointer;
transform: translate(-100%, 60%);
font-size: 1.8rem;
color: #fff;
}

@media screen and (max-width: 530px){
        margin-right:-2em ;
    }
    @media screen and (max-width: 470px){
        margin-right: -5em ;
    }
   
`;