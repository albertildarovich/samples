import { observable, action } from "mobx";
import axios from "axios";

import { RELATIONSHIPSARRAY } from '../utils/constants';

export default class AppState {
  @observable authenticated;
  @observable authenticating;
  @observable items;
  @observable item;
  @observable relationship;

  @observable testval;

  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.items = [];
    this.item = {};
    this.firstCharacter = null;
    this.secondCharacter = null;
    this.relationship = null;

    this.testval = "Cobbled together by ";
  }

  async fetchData(params) {
    const url = `https://www.anapioficeandfire.com/api/characters`;
    const { data } = await axios.get(url, params);
    data.length > 0 ?
      this.setData(data) :
      this.setSingle(data);
  }

  @action setData(data) {
    this.items = data;
  }

  @action setSingle(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }

  @action setCharacter(name, character) {
    this[name] = character;
    if (this.firstCharacter && this.secondCharacter) {
      let relationship = ``;
      for (let i = 0; i < RELATIONSHIPSARRAY.length; i++) {
        const relativeName = this.secondCharacter[RELATIONSHIPSARRAY[i]];
        if (relativeName && this.firstCharacter.name === relativeName) relationship += RELATIONSHIPSARRAY[i];
      }
      this.relationship = relationship;
    }
  }

  @action authenticate() {
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }
}
