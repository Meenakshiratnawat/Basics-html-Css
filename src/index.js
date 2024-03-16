import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dweep from './dweep.svg';

ReactDOM.render(
  <>
    <div class="flex-container">
      <div>
      <h1 class="h1-custom-style">
          An inspiring design delivered to your inbox every morning
        </h1> 
             <p  class="p-custom-style">Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox
             </p>  
             <h5> Show me how it looks</h5>
             <div class="flex-container2">
              <input class="textbox" type="text" placeholder="Enter your email"  style={{ color: 'white' }}/>
        <button class="button"  style={{ color: 'white' }} >Register Now</button>
        </div>
        <h6 style={{ color: 'white' ,marginLeft:'20px',fontFamily:'Inter',fontSize:'12px'}}>Free - No Spam - No Data Sharing</h6>
      </div>
      <div>
        <img src={dweep} className="dweep-logo" alt="dwweplogo" />
      </div>
    </div>
    <div >    <Footer />
</div>
  </>,
  document.getElementById('root')
);

reportWebVitals();
