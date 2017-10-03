import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    opacity: 0
  }100%{
    opacity: 1
  }
`;

const Photo = styled.img`
  width: 40vw;
  height: 30vw;
  background-color: rgb(135, 135, 135);
  transform: ${({index}) => "rotateY(" + (index * 10) + "deg)"};
  transform-origin: 0 50%;
  box-shadow: 0 4px 23px 16px rgba(0,0,0,0.23);
  position: absolute;
  left: ${({index}) => 400 + -200 * index + 'px'};
  z-index: ${({index}) => 100 + (-index * 10 )};
  transition: transform 1s ease, left 1s ease, z-index 1s ease;
  animation: ${fadeIn} 1s ease;
`;


const PerspectiveWrapper = styled.div`
  perspective: 1000px;
  position: relative;
  left: 0;
  top: 0;
  ${'' /* width: 100%; */}
  ${'' /* height: 560px; */}
  perspective-origin: 0% 50%;
  overflow-x: visible;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;


class Photos extends Component{
  constructor(props){
    super(props);
    this.state = {
      order: Array.from(new Array(this.props.photos.length),(val,index)=>index).reverse()
    }
  }

  handleClick = (i) => {
    const arr = this.state.order;
    const num = arr[i];
    arr.splice(i, 1);
    arr.reverse().push(num);
    arr.reverse();
    this.setState({
      order: arr
    });
  }

  render(){
    return(
      <PerspectiveWrapper>
        {
          this.props.photos ? this.props.photos.map((item, i) => {
            return (
              <Photo
                key={i}
                index={
                  this.state.order.indexOf(i)
                }
                onClick={() => this.handleClick(this.state.order.indexOf(i))} src={item}></Photo>
            )
          }) : ''
        }
      </PerspectiveWrapper>
    )
  }
}

export default Photos;
