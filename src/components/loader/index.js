import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';


const animFirst = keyframes`
  0%{
  transform: rotate(0);
  }25%{
  transform: rotate(20deg);
  }50%{
  transform: rotate(0);
  }75%{
  transform: rotate(0);
  }100%{
  transform: rotate(0);
  }
`;

const animLast = keyframes`
  0%{
  transform: rotate(0);
  }25%{
  transform: rotate(0);
  }50%{
  transform: rotate(0);
  }75%{
  transform: rotate(-20deg);
  }100%{
  transform: rotate(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center
`;

const Pendule = styled.div`
  width: 20px;
  height: 150px;
  position: relative;
  transform-origin: top;

  &::after{
    content: '';
    position: absolute;
    background-color: white;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    bottom: 0;
  }
`;


const FirstPendule = styled(Pendule)`
  animation: ${animFirst} 0.7s infinite cubic-bezier(.46,0,.93,.8);
`;

const LastPendule = styled(Pendule)`
  animation: ${animLast} 0.7s infinite cubic-bezier(.46,0,.93,.8);
`;

const Loader = () => {
  return (
    <Wrapper>
      <FirstPendule/>
      <Pendule/>
      <Pendule/>
      <Pendule/>
      <LastPendule/>
    </Wrapper>
  )
};

export default Loader;
