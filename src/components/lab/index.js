import React, { Component } from 'react';
import styled from 'styled-components';

import StyledIframe from '../iframeLoader';
import {Header, Title, Wrapper, Body} from '../styledComponents.js';
import Loader from '../loader';

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60vh;
`;

class Lab extends Component{

  render(){
    if(this.props.lab){
      console.log('lab', this.props.lab)
    }
    return(
      <Wrapper>
        <Header>
          <Title>Lab</Title>
        </Header>
        <ItemWrapper>
          {
            this.props.lab && this.props.lab[0] && this.props.lab[1] ?
              this.props.lab.map((item, i) => {
                return  (<Item key={i}>
                  <div>{item.name}</div>
                  <StyledIframe
                    height='350'
                    scrolling='no'
                    onLoad={this._iframeLoaded}
                    title={item.name} 
                    src={item.embed}
                    frameBorder='no'
                    style={{width: '100%'}}
                  >
                  </StyledIframe>
                  <a href={item.url} target="_blank">See It</a>
                </Item>)
              })
            :
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Loader/>
            </div>
          }
        </ItemWrapper>
      </Wrapper>
    )
  }
}

export default Lab;
