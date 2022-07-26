import React from 'react';
import styled from 'styled-components';

const PageNotFoundStyle = styled.div`
   @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    position: relative;
    width: 40px;
    height: 40px;
    margin: 90px auto;
    border-radius: 50%;
    border-top: 3px solid rgba(0, 0, 0, 0.1);
    border-right: 3px solid rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    border-left: 3px solid #818a91;
    transform: translateZ(0);
    animation: spin 0.5s infinite linear;
  }
`;

function PageNotFound (){
  return (
    <PageNotFoundStyle >
      <div  className='loading-spinner'/>
      <center>
        <h1>Page Not Found</h1>
      </center>
    </PageNotFoundStyle>
  )
}

export default PageNotFound;
