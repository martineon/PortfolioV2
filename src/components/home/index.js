import React, { Component } from 'react';
import styled from 'styled-components';

import {Header, Title, Wrapper} from '../styledComponents.js';
import Quotes from '../quotes';



class Home extends Component {

  render(){
    return(
      <Wrapper>
        <Header>
          <Title>
            Martin Eon
          </Title>
        </Header>
        <Quotes></Quotes>
      </Wrapper>
    )
  }
}

export default Home;
