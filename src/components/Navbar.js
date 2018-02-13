import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

const styles = {
  wrapper: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    height: 60,
    width: '100%',
    boxShadow: '0 1px 4px rgba(0,0,0,.1)',
    zIndex: 20,
    background:'gray',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 20px',
    width: 120,
    height: '100%',
    hover: 'pointer'
  },
  img: {
    height: '100%',
    width: '100%'
  }
};

class Navbar extends PureComponent {
  render() {
    return (
      <nav style={styles.wrapper} className="bg">
        <Link style={styles.icon} to="/">
          {console.log(styles)}
          <img src="//o4j806krb.qnssl.com/public/images/cnodejs.svg" alt="" style={styles.img} />
        </Link>
      </nav>
    );
  }
}

export default Radium(observer(Navbar));
