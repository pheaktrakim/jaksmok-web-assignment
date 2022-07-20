import React from "react";
import { Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { MENU } from "../../constants/routes";

function SidebarPage() {
  let location = useLocation();
  const partName = location.pathname.split('/')[1];
  const [activeMenu, setActiveMenu] = React.useState('');

  React.useMemo(()=> {
    if(partName)
    setActiveMenu(partName)
  },[partName])

  return (
    <Col xs={12} md={3} className="bg-light sidebar-menu"
      style={{
        borderRight: '1px solid #e5e7eb',
        position: 'relative'
      }}
    >
      {MENU.sort((a,b)=>{ return a.rank - b.rank}).map((item)=> {
        return (
          <Link className='nav-link' to={item.routerTo} key={item.partName}>
            <div className={`p-2 nav-item  ${activeMenu === item.partName ? ' bg-active' : ''}`}>
              <div className='text-menu-item'>{item.name}</div>
            </div>
          </Link>
        )
      })}
    </Col>
  )
}

export default SidebarPage;