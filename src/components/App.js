import React, { PureComponent } from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import Radium from 'radium';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Topics from './Topics';
import Topic from './Topic';
import User from './User';
import { getLocal } from '../utils';
import { currentUserKey } from '../consts';
import '../main.css'

import 'zent/css/index.css';
import 'github-markdown-css/github-markdown.css';

const styles = {
  page: {
    paddingBottom: 40,
    width: '90%',
    maxWidth: 1400,
    minWidth: 960,
    margin: '80px auto 15px',
    minHeight: 400
  },
  content: {
    marginRight: 305
  }
};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const currentUser = getLocal(currentUserKey);
    if (currentUser) {
      this.props.store.currentUser = currentUser;
    }
  }

  render() {
    const { store } = this.props;
    return (
      <HashRouter>
        <div>
          <Navbar store={store} />
          <div style={styles.page} className="topics">
            <div style={styles.content}>
              <Route exact path="/" render={() => <Topics store={store} />} />
              <Route path="/topic/:id" render={({ location }) => <Topic store={store} location={location} />} />
              <Route path="/user/:loginname" render={({ location }) => <User store={store} location={location} />} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Radium(App);
