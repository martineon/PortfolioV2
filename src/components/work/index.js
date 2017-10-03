import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactDOM from 'react-dom'

import {Header, Title, Wrapper, Body, Content, Subtitle, Abouts} from '../styledComponents.js';
import DotComp from '../dotSelector';
import Photos from '../photos';
import Loader from '../loader';

import Arrow from '../../arrow.svg';

const arrowAnim = keyframes`
  0%{
    top: 0;
  }70%{
    top: 5px
  }100%{
    top: 0;
  }
`;


const fadeInOpacity = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1
  }
`;

const StyledWrapper = styled(Wrapper)`
  animation: ${fadeInOpacity} 2s ease ;
  opacity: 1;
`;


const WorksWrapper = styled.div`
  overflow: hidden;

`;

const ArrowWrapper = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledSvg = styled.svg`
  position: relative;
  cursor: pointer;
  &:hover{
    animation: ${arrowAnim} 0.5s ease;
  }
`;

class Work extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrowClick: false,
      active: 0,
    }
  }

  handlePhotoClick = (e) => {
    console.log(e);
  }

  handleClick = () => {
    this.setState({arrowClick: !this.state.arrowClick});
    console.log(this.state.arrowClick);
  }

  handleDotClick = (index) => {
    console.log(index);
    this.setState({
      active: index
    })
  }


  render(){
    return (
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          width: "100vw",
          position: "absolute",
          transition: 'margin-top 1s ease',
        }}
        ref="wrapper"
      >
        <WorksWrapper>
          <Wrapper>
            <Header>
              <Title>Work</Title>
            </Header>
          </Wrapper>
          {
            this.props.work && this.props.work[this.state.active] ?
              (
                <div>
                  <StyledWrapper
                    style={{
                      top: this.state.arrowClick ? '-100vh' : '0',
                      transition: 'top 1s ease',
                      overflowY: this.state.arrowClick ? 'visible' : 'hidden',
                    }}
                  >

                    <Body
                      style={{
                        paddingTop: '20vh',
                      }}
                    >
                      <Photos photos={this.props.work[this.state.active].img}/>
                      <DotComp work={this.props.work} click={this.handleDotClick.bind(this)} active={this.props.work[this.state.active].name}/>
                    </Body>
                  </StyledWrapper>
                  <Wrapper
                    style={{
                      top: this.state.arrowClick ? '0' : '100vh',
                      transition: 'top 1s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      paddingTop: '20vh'
                    }}
                  >
                    <Abouts>
                      <Subtitle>description:</Subtitle>
                      <Content style={{
                        flexWrap: 'wrap'
                      }}>
                        <div>
                          {this.props.work[this.state.active].description}
                        </div>
                      </Content>
                    </Abouts>
                    <Abouts>
                      <Subtitle>link:</Subtitle>
                      <Content>
                        <div>
                          <a href={this.props.work[this.state.active].url} target="_blank">{this.props.work[this.state.active].url}</a>
                        </div>
                      </Content>
                    </Abouts>
                  </Wrapper>
                  <div
                    style={{
                      width: '100vw',
                      position: 'absolute',
                      bottom: this.state.arrowClick ? '90vh' : '15px' ,
                      zIndex: 99999,
                      left: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      height: '32px',
                      transition: 'bottom 1s ease'
                    }}
                  >
                    <ArrowWrapper
                      style={{
                        transform: this.state.arrowClick ? 'rotate(180deg)' : 'none',
                        transition: 'transform 1s ease',
                        cursor: "pointer"
                      }}
                      onClick={this.handleClick}
                    >
                      <StyledSvg
                        width="10px"
                        height="25px"
                        viewBox="0 0 20 30"
                      >
                        <line stroke="#fff" strokeWidth={2}
                        fill="none" x1="10" y1="0" x2="10" y2="30"/>
                        <line stroke="#fff" strokeWidth={2}
                        fill="none" x1="10" y1="30" x2="19" y2="20.1"/>
                        <line stroke="#fff" strokeWidth={2}
                        fill="none" x1="10" y1="30" x2="1" y2="20.1"/>
                      </StyledSvg>
                      {/* <div
                        style={{
                        transform: "rotate(90deg)",
                        fontSize: '40px'
                        }}
                        >
                        >
                      </div> */}
                    </ArrowWrapper>
                  </div>
                </div>

              )

            :
            <Wrapper
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Loader/>
            </Wrapper>
          }
        </WorksWrapper>
      </div>
    )
  }
}

export default Work;
