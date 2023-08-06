import { styled } from "styled-components"
import { CgTrack } from 'react-icons/cg'
import { TbSitemap } from 'react-icons/tb'
import { HiMenuAlt1 } from 'react-icons/hi'
import { useState } from "react"

export const Navbar = () => {

  const [menuNavDisplay, setMenuNavDisplay] = useState("none")

  const handleMenuClick = () => menuNavDisplay === "none" ? setMenuNavDisplay("flex") : setMenuNavDisplay("none")

  const Navbar = styled.div`
  border-bottom: 2px solid white;
  display: flex;
  justify-content: between;
  align-items: center;
  position: relative
`

  const Logo = styled.h2`
   font-weight: bold;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: .1rem;
   height: 2rem;
   position: relative;
   cursor: pointer;
   width: 7rem
`
    
  const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

  const NavList = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  width: 100%
`

  const List = styled.div`
  border: 2px solid white;
  border-radius: .3rem;
  padding: .5rem;
  display: flex;
  justify-content: center;
  gap: .3rem;
  align-items: center;
  font-size: .7rem;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background: white;
    color: #242424;
  }
  @media (max-width: 400px){
    display: none
  }
`

  const Menu = styled.div`
  border: 2px solid white;
  border-radius: .3rem;
  padding: .5rem;
  display: none;
  justify-content: center;
  gap: .3rem;
  align-items: center;
  font-size: .7rem;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background: white;
    color: #242424;
  }
  @media (max-width: 400px){
    display: flex
  }
`

  const Icon = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center
`

  const MenuNav = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: 1.5rem;
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  border: 2px solid white;
  border-bottom-left-radius: .3rem;
  border-bottom-right-radius: .3rem;
  border-top: none;
  @media (max-width: 400px){
    display: ${menuNavDisplay}
  }
`

  const MenuList = styled.div`
  border: 2px solid white;
  border-radius: .3rem;
  padding: .5rem;
  display: flex;
  justify-content: center;
  gap: .3rem;
  align-items: center;
  font-size: .7rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover{
    background: white;
    color: #242424;
  }
`

  return (
    <Navbar>

      <Logo> 
        <Span>S</Span>
        <Span>O</Span>
        <Span>L</Span>
        <Span>J</Span>
      </Logo>

      <NavList>
        <List><Icon><CgTrack /></Icon> New Jobs</List>
        <List> <Icon><TbSitemap/></Icon> Applied Jobs</List>
        <Menu onClick={handleMenuClick}><Icon><HiMenuAlt1 /></Icon></Menu>
      </NavList>

      <MenuNav>
        <MenuList><Icon><CgTrack /></Icon> New Jobs</MenuList>
        <MenuList> <Icon><TbSitemap/></Icon> Applied Jobs</MenuList>
      </MenuNav>

    </Navbar>
  )
}
