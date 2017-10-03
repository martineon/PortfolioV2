import React, { Component } from 'react';
import styled from 'styled-components';
import { RouteTransition } from 'react-router-transition';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Home from './components/home';
import Menu from './components/menu';
import WorkContainer from './containers/workContainer';
import LabContainer from './containers/labContainer';
import About from './components/about';
import store from './store';
import Cv from './components/cv';

const MenuWrapper = styled.div`
  position: absolute;
  right: 5vw;
  top: 15vh;
  z-index: 999999;
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      activePage: ''
    }

  }
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Route render={({location, history, match}) => {
              return (
                <Route exact path="/cv" component={Cv} />
              )
            }}/>
              <Route render={({location, history, match}) => {
                return (
                  <RouteTransition
                    pathname={location.pathname}
                    atEnter={{
                    opacity: 0, }}
                    atLeave={{
                    opacity: 0, }}
                    atActive={{
                    opacity: 1 }}
                    mapStyles={styles => ({ opacity: styles.opacity,})}
                  >
                    <MenuWrapper>
                      <Menu></Menu>
                    </MenuWrapper>
                    <Switch key={location.key} location={location}>
                      <Route exact path="/" component={Home} />
                    <Route exact path="/work" component={WorkContainer}/>
                    <Route exact path="/lab" component={LabContainer}/>
                    <Route exact path="/about" component={About}/>
                  </Switch>
                </RouteTransition>
              );
            }} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
