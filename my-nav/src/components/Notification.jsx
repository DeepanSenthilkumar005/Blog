// Notification.jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Notification.css'

const Notification = () => {
  
  const notify = (v) => {
    // console.log(v)
    toast.success(`${v}`, {
      position: 'top-right',
    });
  };

  return (
    <div className='notify'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-md-6 p-1">
          <button className='btn' onClick={(e) => notify  (e.target.value)} value={'Show Notification 1'}>
            
            Show Notification 1
            </button>
          <ToastContainer />
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6 p-1"> `
            <button className='btn' onClick={(e) => notify  (e.target.value)} value={"Show Notification 2"}>Show Notification 2</button>
          <ToastContainer /></div>
          <div className="col-lg-3 col-sm-12 col-md-6 p-1">
             <button className='btn' onClick={(e) => notify  (e.target.value)} value={"Show Notification 3"}>Show Notification 3</button>
      <ToastContainer /></div>
          <div className="col-lg-3 col-sm-12 col-md-6 p-1">
            <button className='btn' onClick={(e) => notify  (e.target.value)} value={"Show Notification 4"}>Show Notification 4</button>
      <ToastContainer /></div>
          <div className="col-lg-3 col-sm-12 col-md-6 p-1">
             <button className='btn' onClick={(e) => notify  (e.target.value)} value={"Show Notification 5"}>Show Notification 5</button>
      <ToastContainer /></div>
          <div className="col-lg-3 col-sm-12 col-md-6 p-1"> 
            <button className='btn' onClick={(e) => notify  (e.target.value)} value={"Show Notification 6"}>Show Notification 6</button>
      <ToastContainer /></div>
        </div>
      </div>
      {/* <button onClick={(e) => notify  (e.target.value)} value={'Show Notification 1'}>Show Notification 1</button>
      <ToastContainer />
      <button onClick={(e) => notify  (e.target.value)} value={"Show Notification 1"}>Show Notification2</button>
      <ToastContainer />
      <button onClick={(e) => notify  (e.target.value)} value={'Show Notification 1'}>Show Notification3</button> 
      <ToastContainer />*/}
    </div>
  );
};

export default Notification;
