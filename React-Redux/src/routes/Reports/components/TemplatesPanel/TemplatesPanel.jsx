import React, { Component } from 'react';
import './TemplatesPanel.less';

const { Nav, NavItem } = require(`react-bootstrap`);
const classNames = require(`classnames`);

export default class TemplatesPanelComponent extends Component {

  handleSelect = (tab) => {
    const { setCurrentTemplate } = this.props;
    setCurrentTemplate(tab);
  };

  render() {
    const {
      tabs,
    } = this.props;
    return (
      <Nav bsStyle='pills' className='left-inner-panel height-100' stacked>
        { tabs &&
          tabs.map(tab =>
            <NavItem
              key={tab.code}
              className={classNames({ active: tab.active })}
              onSelect={() => this.handleSelect(tab)}
            >
              {tab.nameRu}
            </NavItem>,
          )
        }
      </Nav>
    );
  }
}
