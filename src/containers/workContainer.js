import { connect } from 'react-redux';
import React, { Component } from 'react';
import Work from '../components/work';

function fetchLab(WrappedComponent){
  return class extends Component{
    componentDidMount(){
      fetch('https://api.mlab.com/api/1/databases/portfolio/collections/works?apiKey=AheEcinUcieEenaTZgYizszR2SEnT2Ig')
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
      dispatch({type: 'INIT_WORK', results});
    },
    fetchError(error){
      console.log(error);
    }
  }
}

function mapStateToProps(state) {
  return {
    work: state.work
  }
}

const WorkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchLab(Work));

export default WorkContainer;
