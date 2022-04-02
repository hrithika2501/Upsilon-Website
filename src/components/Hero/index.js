import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, Button, Button2,  ForButton, HeroContent, HeroItems, NavSide, Top, Hou, Down, Product1,ProductWrapper,Head,Desc, H1, H2, P, ProductCard, Img, Product2} from './HeroElements';
import { BiCollection} from "react-icons/bi";
import {BsFillHouseDoorFill} from "react-icons/bs";
import {BsMicrosoft} from "react-icons/bs";
import {IoIosHelpCircle} from "react-icons/io";
import {IoLogOut} from "react-icons/io5";

const Hero = ({data}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <HeroContainer>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroContent>
        <NavSide>
            <Top>
                <Hou to=''><BsFillHouseDoorFill/></Hou>
                <Hou to=''><BsMicrosoft/></Hou>
                <Hou to=''><BiCollection/></Hou>
                <Hou to=''><IoIosHelpCircle/></Hou>
            </Top>
            <Down to=''><IoLogOut/></Down>
        </NavSide>
                <HeroItems>
                <Product1>
                    <ForButton>
                    <H1>Learn New Skills</H1>
                    <Button>See All</Button>
                    </ForButton>
                    <P>One Simple Price Unlimited Skills</P>
                    <ProductCard>
                    {data.map((product, index) => {
                        return(
                       <ProductWrapper key={index} className="overlay" >  
                      
                    <Img src={product.img}  ></Img>
                    <Head>{product.name}</Head>
                    <Desc>{product.desc}</Desc>
                   
                    </ProductWrapper> 
                    
                    )
                        })}
                        </ProductCard>
                    
                </Product1>
                <Product2>
                    <ForButton>
                <H2>Your Courses</H2>
                <Button2>See All</Button2>
                </ForButton>
                <ProductCard>
                    {data.map((product, index) => {
                        return(
                       <ProductWrapper key={index}  >    
                    <Img src={product.img}  ></Img>
                    <Head>{product.name}</Head>
                    <Desc>{product.desc}</Desc>
                    </ProductWrapper> 
                    
                    )
                        })}
                        </ProductCard>
                </Product2>
                </HeroItems>
            </HeroContent>
    </HeroContainer>
  )
}

export default Hero