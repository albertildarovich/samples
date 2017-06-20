import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/lib/scss/react-widgets.scss";
import ListItem from "./ListItem";

@inject(`store`)
@observer

export default class CharacterSelector extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appState;
  }

  onChange(val) {
    const { name } = this.props;
    this.store.setCharacter(name, val);
  }

  render() {
    const { items, selectedCharacter } = this.props;

    return (
      <div>
        <DropdownList
          valueField='name'
          textField='name'
          data={items.toJS()}
          filter='contains'
          className='dropdownList'
          onChange={this.onChange.bind(this)}
        />
        {selectedCharacter &&
        <img alt='' src={`https://api.got.show${selectedCharacter.imageLink}`} />
        }
      </div>
    );
  }
}
