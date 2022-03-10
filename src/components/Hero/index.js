import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent, HeroItems, NavSide, Top, Down, Hou, Bo, Fil, Mar, Product1, H1, H2, P, ProductCard, Img, Product2} from './HeroElements';

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
                <Hou></Hou>
                <Bo></Bo>
                <Fil></Fil>
                <Mar></Mar>
            </Top>
            <Down></Down>
        </NavSide>
                <HeroItems>
                <Product1>
                    <H1>Learn New Skills</H1>
                    <P>One Simple Price Unlimited Skills</P>
                    <ProductCard>
                    {data.map((product, index) => {
                        return(
                            
                    <Img src={product.img}  key={index}  ></Img>
                    
                    )
                        })}
                        </ProductCard>
                    
                </Product1>
                <Product2>
                <H2>Your Courses</H2>
                <ProductCard>
                    {data.map((product, index) => {
                        return(
                            
                    <Img src={product.img}  key={index}  ></Img>
                    
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