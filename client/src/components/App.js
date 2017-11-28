import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing'
import * as actions from '../actions';

const DashBoard = () => <div>DashBoard</div>
const Survey = () => <div>Survey</div>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/surveys" component={DashBoard} />
            <Route exact={true} path="/surveys/new" component={Survey} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
