// import React from 'react';
import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './componenet/Counter';
import Header from './componenet/Header';
import "./Counter.css"

function App() {

  return (
    <>
    <div className='main'>
    <Header />
    <Counter />
    </div>
    </>
  )
  

}

export default App;
