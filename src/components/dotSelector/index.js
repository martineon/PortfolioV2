import React, { Component } from 'react';
import styled from 'styled-components';


const DotWrapper = styled.div`
  position: absolute;
  right: 20px;
  height: 100px;
  top: calc(50% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const DotSelector = styled.a`
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: ${({active}) => active === "true" ?' #fff' : 'none'};
  width: 5px;
  height: 5px;
  position: relative;
  letter-spacing: 4px;

  &::after{
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    width: 0px;
    height: 0px;
    background-color: white;
    transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease;
  }

  &:hover::after{
    top: 0;
    left: 0;
    width: 5.5px;
    height: 5.5px;
  }

  &::before{
    content: ${({project}) =>  ("\"" + project + "\"")};
    min-width: 80px;
    opacity: ${({active}) => active === "true" ? "1" : "0"};
    position: absolute;
    right: 15px;
    font-size: 10px;
    top: -5px;
    transition: opacity 1s ease;
  }
  &:hover::before{
    opacity: 1;
  }
`;


class DotComp extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeDots: ''
    }
  }



  render(){
    return(
      <DotWrapper>
        {this.props.work ? this.props.work.map((item, i) => {
          return (<DotSelector key={i} onClick={() => this.props.click(i)} href="#" active={(this.props.active == item.name) ? 'true' : 'false'} project={item.name}/>)
        }) : 'none'}
      </DotWrapper>
    )
  }

}

export default DotComp;
