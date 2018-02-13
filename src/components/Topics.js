import React, { PureComponent } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import { Button, Table } from 'zent';
import Timeago from 'timeago.js';
import Tab from './Tab';
import TabDesc from './TabDesc';
import Pagination from './Pagination';

const timeago = new Timeago();

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    minWidth: 30,
    width: 30,
    height: 30
  },
  count: {
    minWidth: 70,
    width: 70,
    textAlign: 'center'
  },
  tab: {
    marginRight: 16,
    minWidth: 36
  },
  title: {
    color: '#000',
    ':hover': {
      color: '#778087'
    }
  },
  time: {
    color: '#778087'
  }
}

class Topics extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = [{
      width: '50%',
      bodyRender: data => (
        <div style={styles.wrapper}>
          <Link to={`/user/${data.author.loginname}`}><img src={data.author.avatar_url} style={styles.img} /></Link>
          <div style={styles.count}>
            <span>{data.reply_count}</span>/
            <span>{data.visit_count}</span>
          </div>
          <TabDesc data={data} style={styles.tab} />
          <p><Link style={styles.title} to={`/topic/${data.id}`}>{data.title}</Link></p>
        </div>
      )
    }, {
      bodyRender: data => <span style={styles.time}>{timeago.format(data.last_reply_at, 'zh_CN')}</span>
    }];
  }

  componentWillMount() {
    this.props.store.fetchTopics();
  }

  render() {
    const { store } = this.props;

    return (
      <div className="bg radius">
        <Tab store={store} />
        
        <Table
          columns={this.columns}
          
          datasets={toJS(store.topics)}
          emptyLabel=""
          rowKey="id" />
        <Pagination page={store.topicsPage} onChange={store.changeTopicsPage.bind(store)} />
      </div>
    );
  }
}

export default Radium(observer(Topics));
