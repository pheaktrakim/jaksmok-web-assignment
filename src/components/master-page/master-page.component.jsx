import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarPage from "./navbar.component";
import SidebarPage from "./sidebar.component";

function MasterPage({children}) {

  return (
    <Container fluid>
      {/* head nav */}
      <React.Fragment>
        <NavbarPage />
      </React.Fragment>
      <Row>
        {/* Sidebar */}
        <SidebarPage />
        {/* Content */}
        <Col xs={12} md={9} className="h-100">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default MasterPage;