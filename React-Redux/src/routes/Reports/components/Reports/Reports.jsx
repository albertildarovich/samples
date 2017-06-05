import React, { Component } from 'react';
import _ from 'lodash';
import { Row, Col } from 'react-bootstrap';
import Pagination from 'containers/Pagination';
import ReportsTable from '../ReportsTable';
import TemplatesPanel from '../../containers/TemplatesPanelContainer';
import DeleteReports from '../../containers/DeleteReportsContainer';
import ReportCreatorForm from '../ReportCreatorForm';

import './Reports.less';


export default class Reports extends Component {
  componentDidMount() {
    const { setCurrentTemplate, fetchTemplates } = this.props;
    fetchTemplates().then(setCurrentTemplate());
  }

  componentDidUpdate() {
    this.setCurrentTemplate();
  }

  setCurrentTemplate() {
    const { tabs, setCurrentTemplate, currentTemplate, locationQuery } = this.props;
    const queryTemplateUuid = _.get(locationQuery, `templateUuid`);
    const existingTemplate = _.find(tabs, tab => tab.code === queryTemplateUuid);
    const currentTemplateCode = _.get(currentTemplate, `code`);
    if (existingTemplate && (!currentTemplateCode || (existingTemplate.code !== currentTemplateCode))) {
      setCurrentTemplate(existingTemplate);
    } else if (!currentTemplateCode && tabs && tabs.length) {
      setCurrentTemplate(tabs[0]);
    }
  }

  render() {
    const {
      templatesPanelClass,
    } = this.props;
    return (
      <div className='b-reportsContainer'>
        <div className='b-panelHeader'>
          <div className='b-panelHeader-title'>
            <h1>
              Отчеты
            </h1>
          </div>
        </div>
        <div className='b-reports'>
          <div className={templatesPanelClass}>
            <TemplatesPanel {...this.props} />
          </div>
          <div className='b-reports-tables'>
            <div className='b-reports-header'>
              <ReportCreatorForm {...this.props} />
            </div>
            <div className='b-reportsTable'>
              <ReportsTable {...this.props} />
            </div>
            <div className='b-reports-footer'>
              <Row>
                <Col xs={7}>
                  <DeleteReports {...this.props} />
                </Col>
                <Col xs={5}>
                  <Pagination {...this.props} />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
