import { styled } from "styled-components";
import { CgTrack } from "react-icons/cg";
import { TbSitemap } from "react-icons/tb";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

interface MenuProps {
  menuNavDisplay: string
}

const NavbarContainer = styled.div`
  border-bottom: 2px solid white;
  display: flex;
  justify-content: between;
  align-items: center;
  position: relative;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  padding: 1.24rem 0rem;
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  height: 2rem;
  position: relative;
  cursor: pointer;
  width: 5.7rem;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const List = styled(Link)`
  border: 2px solid white;
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    background: white;
    color: #242424;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

const Menu = styled.div<MenuProps>`
  border: 2px solid white;
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: none;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  ${(props) =>
    props.menuNavDisplay === "flex"
      ? `background: white;color: #242424`
      : `background: #242424; color: white;
  &:hover{
    background: white;
    color: #242424;
  }`};

  @media (max-width: 400px) {
    display: flex;
  }
`;

const Icon = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuNav = styled.div<MenuProps>`
  background: #242424;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem;
  position: absolute;
  top: 4.6rem;
  left: 0;
  right: 0;
  border: 2px solid white;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  border-top: none;
  @media (max-width: 400px) {
    display: ${(props) => props.menuNavDisplay};
  }
`;

const MenuList = styled(Link)`
  border: 2px solid white;
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  color: white;
  &:hover {
    background: white;
    color: #242424;
  }
`;

const Navbar: React.FC = () => {
  const [menuNavDisplay, setMenuNavDisplay] = useState("none");

  const handleMenuClick = () =>
    menuNavDisplay === "none"
      ? setMenuNavDisplay("flex")
      : setMenuNavDisplay("none");

  type MenuListDataTypes = {
    id: number;
    to: string;
    icon: any;
    text: string;
  };

  const MenuListData: MenuListDataTypes[] = [
    {
      id: 1,
      to: "/newjobs",
      icon: <CgTrack />,
      text: "New Jobs",
    },
    {
      id: 2,
      to: "/appliedjobs/All",
      icon: <TbSitemap />,
      text: "Applied Jobs",
    },
  ];

  return (
    <NavbarContainer>
      <Logo to="/">
        <Span>S</Span>
        <Span>O</Span>
        <Span>L</Span>
        <Span>J</Span>
      </Logo>

      <NavList>
        {MenuListData.map((menuList) => (
          <List key={menuList.id} onClick={handleMenuClick} to={menuList.to}>
            <Icon>{menuList.icon} </Icon> {menuList.text}{" "}
          </List>
        ))}
        <Menu menuNavDisplay={menuNavDisplay} onClick={handleMenuClick}>
          <Icon>
            <HiMenuAlt1 />
          </Icon>
        </Menu>
      </NavList>

      <MenuNav menuNavDisplay={menuNavDisplay}>
        {MenuListData.map((menuList) => (
          <MenuList
            key={menuList.id}
            onClick={handleMenuClick}
            to={menuList.to}
          >
            <Icon>{menuList.icon} </Icon> {menuList.text}{" "}
          </MenuList>
        ))}
      </MenuNav>
    </NavbarContainer>
  );
};

export default Navbar;
