import React, { Component } from 'react';
import List from './List/List';

export default class Root extends Component {

  static propTypes = {
    items: React.PropTypes.object.isRequired
  };

  static defaultProps = {
    items: [
      { label: 'Some' },
      { label: 'Other' },
      { label: 'Content' }
    ]
  };

  render () {
    const { items } = this.props;
    return (
      <div>
        <List items={items} />
        <List />
      </div>
    );
  }
}
