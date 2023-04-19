import React from 'react'
import { HeadNav, PrimaryNav, MenuLink, Menu, Hamburger, Logo, Title, GridContainer, GridItem } from './NavElement'
import logo from '../../assets/injection.png'
const Navbar = () => {
  return (
    <>
      <HeadNav />
      <PrimaryNav>
        {/* Image Downloaded from freepik */}
        <GridContainer>
          <GridItem><Logo src={logo} alt="logo" /></GridItem>
          <GridItem style={{paddingTop: 20}}><Title as="h1">Vaccine Clinic</Title></GridItem>
        </GridContainer>
        {/* <Hamburger /> */}
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/listpatients" activeStyle>
            Patients
          </MenuLink>
          <MenuLink to="/listvaccines" activeStyle>
            Vaccines
          </MenuLink>
          <MenuLink to="/annual" activeStyle>
            Annual Report
          </MenuLink>
          {/* <MenuLink to="/signup" activeStyle>
            SignUp
          </MenuLink> */}
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar