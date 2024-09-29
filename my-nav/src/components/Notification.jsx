import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Notification.css';
import { useState } from 'react';

const Notification = () => {
  const [show,setShow]=useState(false);
  const notify = (message) => {
    // <p className='sn'>
    toast.success(message, {
      position: 'top-right',
      autoClose: false,
    });
  };

  return (
    <div className='notify1'>
      <div className="container">
        <div className="row">
          {Array.from({ length: 8 }, (_, i) => (
            <div className="col-lg-3 col-sm-12 col-md-6 p-1" key={i}>
              <button className='btn' onClick={() => notify(`Show Notification ${i + 1}`)}>
                Show Notification {i + 1}
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Notification;
