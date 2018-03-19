import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import RecentEmails from 'features/recentEmails/RecentEmails';
import WidgetWrapper from 'components/widgetWrapper/WidgetWrapper';
import './MainContentWrapper.css';

const MainContentWrapper = () => (
  <Fragment>
    <Row>
      <Col md={6} className="unit-column">
        <RecentEmails />
      </Col>
      <Col md={6} className="unit-column">
        <WidgetWrapper />
      </Col>
    </Row>
    <Row>
      <Col md={6} className="unit-column">
        <WidgetWrapper />
      </Col>
      <Col md={6} className="unit-column">
        <WidgetWrapper />
      </Col>
    </Row>
  </Fragment>
);

export default MainContentWrapper;