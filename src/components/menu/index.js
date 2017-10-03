import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import { Link, Route } from 'react-router-dom';


const menuAnim = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 25vw;
  display: flex;
  justify-content: space-between;
`;

const ItemLink = styled(Link)`
  height: 20px;
  font-size: 12px;
  color: white;
  position: relative;
  text-decoration: none;

  &::after, ::before{
    content: '';
    position: absolute;
    bottom: 2px;
    height: 1px;
    border-radius: 50px;
    background-color: white;
    transition: width 0.2s ease;
  }

  &::after{
    width: ${({activePage}) => activePage ? '100%' : 0};
    opacity: 1;
    right: 0;
  }

  &:hover::after{
    width: 100%;
    left: 0;
  }
  &::before{
    left: 0;
    opacity: 0;
    width: 100%;
  }
`;

const Item = ({exactPath, to, children}) =>
  (<Route path={to} exact={exactPath} children={({match}) => {
    console.log('to', to, 'match', match);
    return(
      <ItemLink to={to} activePage={match}>{children}</ItemLink>
    )}} />)

class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      activePage: "/"
    }
  }


  render() {
    return(
      <Wrapper>
        <Item to='/' exactPath>Home</Item>
        <Item to='/work'>Work</Item>
        <Item to='/lab'>Lab</Item>
        <Item to='/about'>About</Item>
      </Wrapper>
    )
  }
}

export default Menu;
