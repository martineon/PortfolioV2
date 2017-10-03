import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import sanitizeHtml from 'sanitize-html';

import {Wrapper, Body, Subtitle} from '../styledComponents.js';
import Loader from '../loader';

const animLine = keyframes`
  0%{
    width: 0;
    right: 0;
  }100%{
    width: 150px;
    right: 0;
  }
`;

const Text = styled.div`
  font-size: 34px;
  display: flex;
  justify-content: flex-end;
  text-align: right;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    width: 150px;
    right: 0;
    animation: ${animLine} 2s ease;
    bottom: -10px;
    background: #fff;
    height: 2px;
  }
  &::before{
    content: "";
    position: absolute;
    width: 150px;
    right: 0;
    bottom: -10px;
    ${'' /* background: rgb(166, 166, 166); */}
    height: 2px;
  }
`;

const Author = styled.div`
  width: auto;
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;

class Quotes extends Component{
  constructor(props){
    super(props);
    this.state = {
      quote: ''
    }
  }

  componentDidMount(){
    fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then((response) => {
      return response.json();
    }).then((results)   => {
      this.setState({
        quote: results
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  render(){
    this.state.quote !== '' ? console.log(this.state.quote) : null;
    return (
      <div
        style={{
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <div>
          {this.state.quote !== '' && this.state.quote ?
            this.state.quote.map((item, i)=> {
              return(
                <div key={i}>
                  <Text>
                    {
                      sanitizeHtml(item.content,{
                        allowedTags: []
                      })
                    }
                  </Text>
                  <Author>• {item.title} •</Author>
                </div>
              )
            })
          :  <Loader/>}
        </div>
      </div>
    )
  }
  }

export default Quotes;
