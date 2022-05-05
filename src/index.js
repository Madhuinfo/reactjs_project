import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import React, {useEffect, useState} from 'react';




// function ReactHooks(){
//     const[count, updatecount] = useState(0);
     
//   return(
//       <div className='container'>
//       <br></br>
//       <p>You Cliked the above Buttton <span className='count_time'>{count}</span> Times</p>
//       <button onClick={() => updatecount(count + 1)} className="btn btn-primary">Click Here</button>
//       </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
