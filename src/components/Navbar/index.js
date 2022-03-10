import React from 'react'
import {Nav, Logo,Icon, Search, Text, Left, Right, Bell, Profile, MobileIcon} from './NavElements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Left>
      <Logo></Logo>
      <Icon>
      <Search />
      <Text>Search a course</Text>
      </Icon>
      </Left>
      <Right>
      <Bell/>
        <Profile></Profile>
        <MobileIcon onClick={toggle}>
                    
                    <FaBars />
                </MobileIcon>
      </Right>
      
    </Nav>
  );
}

export default Navbar