import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(184, 184, 184, 0.36);
  position: fixed;
  z-index: 9999;
  justify-content: center;
  display: ${({showModal}) => showModal ? 'flex' : 'none' };
  top: 0;
  left: 0;
`;

class Modal extends Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
  }

  handleClick = () => {
    this.setState({
      showModal: false
    })
  }


  componentDidMount(){
    this.setState({
      showModal: this.props.showModal
    })
  }

  render(){
    return(
      <Wrapper showModal={this.props.showModal} onClick={this.props.handleClick.bind()}>
        <div>
          {this.props.children}
        </div>
      </Wrapper>
    )
  }
}

export default Modal;
