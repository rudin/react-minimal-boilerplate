import React, { Component } from 'react';

const ListItem = ({ label }) => <div>{label}</div>;

export default class List extends Component {

  static propTypes = {
    items: React.PropTypes.object.isRequired
  };

  static defaultProps = {
    items: [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
      { label: 'Four' }
    ]
  };

  render () {
    const { items } = this.props;
    return (
      <div>
        { items.map(item => <ListItem label={item.label} />) }
      </div>
    );
  }
}
