import React from "react";
import { Col, Row } from "react-bootstrap";
import MasterPage from "../../components/master-page/master-page.component";
import { sampleData } from "../data";

function ViewDetailMoviePage(){
  let movie = sampleData[0];

  return (
    <MasterPage>
      <Row>
        <Col xs={12} md={12} className='p-0'>
         <div className='box' style={{margin: '10px !important'}}>
            <div 
              // thumbnail
              style={{
                height: '350px'
              }} 
            />
            <b className="mt-3 mb-3">{movie.title}</b>
            <p>
              {/* Just loop generate text for UI only */}
              {[...sampleData, ...sampleData, ...sampleData].map((item, index)=> {
                return (
                  <React.Fragment key={index}>
                    {movie.description}
                  </React.Fragment>
                )
              })}
            </p>
          </div>
        </Col>
      </Row>
    </MasterPage>
  )
}

export default ViewDetailMoviePage;