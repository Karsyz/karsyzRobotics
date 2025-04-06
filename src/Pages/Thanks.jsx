import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function Thanks() {
  return (
    <div className="">
      <Navbar />
      <div className="mt-32 flex justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 whitespace-nowrap">
            Thanks for Your Purchase!
          </h1>
          <p className="text-lg font-semibold">Check your email.</p>
          <p className="text-lg font-semibold">
            The files will be sent to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
