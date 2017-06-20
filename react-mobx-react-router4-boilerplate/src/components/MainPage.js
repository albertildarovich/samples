import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Match, Link } from "react-router-dom";

import Protected from "./Protected";
import DataWrapper from "./DataWrapper";
import CharacterSelector from "./CharacterSelector";

@Protected
@DataWrapper
@observer

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  render() {
    const { items, firstCharacter, secondCharacter, relationship } = this.store.appState;
    return (
      <div className='page posts'>
        <h1>Characters relationship</h1>
        <hr />
        {items.length ?
          (<div className='characterWrapper'>
            <CharacterSelector {...{ items, firstCharacter, name: `firstCharacter` }} />
            <p>{relationship}</p>
            <CharacterSelector {...{ items, secondCharacter, name: `secondCharacter` }} />
          </div>)
          : `loading...`
        }
      </div>
    );
  }
}
