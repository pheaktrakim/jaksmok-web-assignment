import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Row, Col, Offcanvas } from "react-bootstrap";
import { MENU } from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";

function NavbarPage(){
  let location = useLocation();
  const partName = location.pathname.split('/')[1];
  const [active, setActive] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState('');

  React.useMemo(()=> {
    if(partName)
    setActiveMenu(partName)
  },[partName])

  return (
    <Row>
      <Col xs={12} md={3} className="p-3 bg-light" 
        style={{
          borderBottom: '1px solid #e5e7eb',
          borderRight: '1px solid #e5e7eb'
        }}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>LOGO</div>
          <div className="phone-menu-call">
            <MenuOutlined onClick={()=> setActive(!active)} />
          </div>
        </div>
      </Col>
      <Col  xs={12} md={9} className="p-3" style={{borderBottom: '1px solid #e5e7eb'}}>
        Movie / List
      </Col>
      {active === true ? (
        <Offcanvas 
        show={true} 
        onHide={() => setActive(false)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {MENU.sort((a,b)=>{ return a.rank - b.rank}).map((item)=> {
            return (
              <Link className='nav-link' to={item.routerTo} key={item.partName}>
                <div className={`p-2 nav-item  ${activeMenu === item.partName ? ' bg-active' : ''}`}>
                  <div className='text-menu-item'>{item.name}</div>
                </div>
              </Link>
            )
          })}
        </Offcanvas.Body>
      </Offcanvas>
      ) : ''}

    </Row>
  );
}

export default NavbarPage;