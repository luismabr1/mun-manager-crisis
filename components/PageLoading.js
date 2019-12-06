import React from 'react';


import Loader from './Loader';

function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
      <style>
        {`
            .PageLoading {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

export default PageLoading;