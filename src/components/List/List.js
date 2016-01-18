import React, { Component } from 'react';

const ListItem = ({ label }, i) => <div key={i}>{label}</div>;

export default class List extends Component {

  static propTypes = {
    items: React.PropTypes.array
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
        { items.map(ListItem) }
      </div>
    );
  }

}
