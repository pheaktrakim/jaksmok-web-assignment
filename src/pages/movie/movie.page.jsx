import React from 'react';
import MasterPage from '../../components/master-page/master-page.component';
import { Row, Col, Pagination } from "react-bootstrap";
import { sampleData } from '../data';
import { ROUTE } from '../../constants/routes';
import { Link } from 'react-router-dom';

function App() {
  const [activePage, setActivePage] = React.useState(0);
  
  React.useEffect(()=> {
    window.scrollTo(0, 0);
  },[activePage]);

  return (
    <MasterPage>
      <Row className='p-2'>  
        {[...sampleData,...sampleData].map((item, index)=> {
          return (
            <Col xs={12} sm={6} md={4} xl={3} className='p-0 cursor-pointer' key={index}>
              <Link to={`${ROUTE.MOVIE_DETAIL.replace(":id", index)}`} style={{textDecoration: 'none'}}>
                <div className='box my-auto' style={{margin: '10px !important'}}>
                  <div 
                    style={{
                      height: '150px'
                    }} 
                  />
                  <b>{item.title}</b>
                  <p>{item.description}</p>
                </div>
              </Link>
            </Col>
          )
        })}
      </Row> 
      {/* Pagination */}
        <Row>
        <Col xs={12} md={12} className='mb-10'>
          <Pagination className='justify-content-center'>
            {[...sampleData, ...sampleData].map((data,index)=>{
              return (
                <Pagination.Item 
                  key={index} 
                  onClick={()=> setActivePage(index)} 
                  active={index === activePage}>
                  {index}
                </Pagination.Item>
              )
            })}
          </Pagination>
        </Col>
      </Row>
    </MasterPage>
  );
}

export default App;
