import React from 'react'
import { HeadNav, PrimaryNav, MenuLink, Menu, Hamburger, Logo, Title } from './NavElement'
import logo from '../../assets/injection.png'
const Navbar = () => {
  return (
    <>
      <HeadNav />
      <PrimaryNav>
        {/* Image Downloaded from freepik */}
        <Logo src={logo} alt="logo" />
        <Title as="h1">Vaccine Clinic</Title>
        {/* <Hamburger /> */}
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/listvaccines" activeStyle>
            Vaccines
          </MenuLink>
          <MenuLink to="/annual" activeStyle>
            Annual Report
          </MenuLink>
          <MenuLink to="/signup" activeStyle>
            SignUp
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar