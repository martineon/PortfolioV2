import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

const animLoader = keyframes`
  0%{
    width: 0;
    height: 0;
    border-radius:150px;
  }100%{
    width:300px;
    height: 350px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  width: auto;
  position: relative;
  border-radius: 5px;
  transition: opacity 1s ease;
`;

const Circle = styled.div`
  width:300px;
  height: 350px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::after{
    content: "";
    ${'' /* top: calc(50% - 70px); */}
    ${'' /* left: calc(50% - 70px); */}
    width:300px;
    height: 350px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #fff;
    position: absolute;
    animation: ${animLoader} 1s ease;
  }
`;

class StyledIframe extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount(){
    this.refs.iframe.addEventListener('load', this._iframeLoaded);
  }

  _iframeLoaded = () => {
    this.setState({
      isLoading: false
    })
  }

  render(){
    return (
      <div style={{ position: "relative" }}>
        <Circle/>
        <Wrapper
          style={{
            opacity: this.state.isLoading ? '0' : '1'
          }}
          isLoading={this.state.isLoading}>
          <iframe ref="iframe" {...this.props}></iframe>
        </Wrapper>
      </div>
    )
  }
}

export default StyledIframe;
