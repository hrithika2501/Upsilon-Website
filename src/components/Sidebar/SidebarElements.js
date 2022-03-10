import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import Logo from '../../images/logos.jpeg'

export const SidebarContainer= styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0ms.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen? '100%' : '0')};
    top: ${({isOpen}) => (isOpen? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
`;

export const Icon = styled.div`
position: absolute;
top: 1.5rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #000;
height: 100% ;
`;

export const SidebarMenu = styled.ul `
/* display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 100px) ; */
height: 80% ;
text-align: center;
display: flex;
flex-direction: column ;
align-items: center;
justify-content: space-around;


`;

export const SidebarLink = styled(Link) `
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
font-family: 'Inter', sans-serif;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&.active {
        color: blue;
    }
   
`;

export const SidebarLogo=styled.div`
width: 350px ;
height: 250px ;
/* margin-left: 5em ; */
background: url(${Logo}) no-repeat;
background-size: cover;
background-position: center;
`;

