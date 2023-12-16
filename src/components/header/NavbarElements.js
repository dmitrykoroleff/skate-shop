import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"


export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#101021': '#101021')};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;

  top: 0;
  z-index: 10;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding-left: 5%;
  padding-right: 160px;
`

export const NavLogo = styled(LinkR)`
  color: #666AED;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5em;
  display: flex;
  align-items: center;

  font-weight: bold;
  text-decoration: none;
`;

export const NavItem = styled.li`
  height: 50%;
  transition: background 0.2s ease-in-out;

  &:hover {
    border-radius: 30px; 
    background: linear-gradient(#5D48B9, #666AED);
  }
`
export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 10%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`