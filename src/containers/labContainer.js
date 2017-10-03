import { connect } from 'react-redux';
import React, { Component } from 'react';
import Lab from '../components/lab';

function fetchLab(WrappedComponent){
  return class extends Component{
    componentDidMount(){
      fetch('https://api.mlab.com/api/1/databases/portfolio/collections/labs?apiKey=AheEcinUcieEenaTZgYizszR2SEnT2Ig')
      .then((response) => {
        return response.json();
      }).then((results)   => {
        this.props.fetchComplete(results);
      }).catch((err) => {
        this.props.fetchError(err);
      });
    }
    render(){
      return(
        <WrappedComponent {...this.props}/>
      )
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchComplete(results){
      dispatch({type: 'INIT_LAB', results});
    },
    fetchError(error){
      console.log(error);
    }
  }
}

function mapStateToProps(state) {
  return {
    lab: state.lab
  }
}

const LabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchLab(Lab));

export default LabContainer;
