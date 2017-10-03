import React, { Component } from 'react';
import styled from 'styled-components';


import {Header, Title, Wrapper, Body, Subtitle, Content, Abouts} from '../styledComponents.js';
import Cv from '../cv';
import Modal from '../modal';
import CVPDF from '../../CV.pdf';

const Email = styled.a`
  font-size: 15px;
  position: relative;
  width: 200px;
  height: 30px;
  ${'' /* overflow: hidden; */}
  margin-top: 15px;
  cursor: pointer;

  &::after, &::before{
    content: ${({label}) => label ? ("\"" + label + "\"") : ''};
    position: absolute;
    display: inline-block;
    width: auto;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
  }

  &::before{
    color: rgb(194, 194, 194);
  }

  &::after{
    width: 0;
    ${'' /* text-align: center; */}
    background-color: #2C4560;
    color: white;
    transition: width 0.5s ease;
  }

  &:hover::after{
    width: 100%;
  }

`;

const Skill = styled.div`
  width: auto;
  height: 80px;
  max-width: 100px;
  word-wrap: break-word;
  text-align: center;
  padding: 0 42px;
  border-right: 1px solid #fff;
  display: flex;
  align-items: center;

  &:first-child{
    padding: 0 42px 0 0;
  }

  &:last-child{
    border: none;
  }
`;


class About extends Component{
  constructor(){
    super();
    this.state={
      showModal: false,
    }
  }

  handleClick = () => {
    this.setState({
      showModal: !this.state.showModal
    })
    console.log('hello');
  }

  render(){
    return(
      <Wrapper>
        <Header>
          <Title>About</Title>
        </Header>
        <Body>
          <Abouts>
            <Subtitle>about:</Subtitle>
            <Content dir='column'>
              <div>I study at Simplon.co for an 8 month formation</div>
              <div>I’m trying to specialized myself in web interactive experience </div>
            </Content>
          </Abouts>
          <Abouts>
            <Subtitle>CV:</Subtitle>
            <Content dir='column'>
              <Email href={CVPDF} download label='my curriculum vitae'></Email>
              {/* <Modal showModal={this.state.showModal} handleClick={this.handleClick}>
                <Cv></Cv>
              </Modal> */}
            </Content>
          </Abouts>
          <Abouts>
            <Subtitle>skills:</Subtitle>
            <Content dir='row'>
              <Skill>react</Skill>
              <Skill>redux</Skill>
              <Skill>styled components</Skill>
              <Skill>svg</Skill>
            </Content>
          </Abouts>
          <Abouts>
            <Subtitle>contact:</Subtitle>
            <Content>
              <Email href="mailto:eon.martin@icloud.com" label='eon.martin@icloud.com'/>
            </Content>
          </Abouts>
        </Body>
      </Wrapper>
    )
  }
}

export default About;
