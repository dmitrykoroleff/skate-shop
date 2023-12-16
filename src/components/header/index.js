import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavLinks,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

// Продумать что делать при нажатии на лого, чтобы ехало вверх смотреть с 3:26:00

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/'>
            SkateShop.ru
          </NavLogo>
            <NavItem>
              <NavLinks to='/'>
                Магазин
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/skates'>
                Скейтборды
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/decks'>
                Доски
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/trucks'>
                Подвески
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/bearings'>
                Подшипники
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/wheels'>
                Колеса
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/griptape'>
                Наждак
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/faq'>
                F.A.Q.
              </NavLinks>
            </NavItem>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar