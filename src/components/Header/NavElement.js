import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const HeadNav = styled.nav`
  z-index: 14;
  height: 40px;
  display: flex;
  background: #16bbc7;
  justify-content: space-between;
  padding: 0.18rem;
`

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 70px;
  display: flex;
  background: #fff;
  justify-content: space-between;
  padding: 0.18rem;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  margin-left: 2%;
  margin-top: 10px;
  `
  export const Title = styled.h6`
  color: #4abbc3;
  font-weight: 3000;
  display: flex;
  align-items: left;
  font-size: 1.5rem;
  margin-left: -15%;
`

export const MenuLink = styled(Link)`
  color: #4abbc3;
  font-weight: 1000;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #0c676e;
  }
`
export const Hamburger = styled(FaBars)`
  
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    
  }
`