// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/lightcase.css';
import './assets/css/meanmenu.css';
import './assets/css/nice-select.css';
import './assets/css/odometer.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/default.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/floating-wpp.css';
import 'aos/dist/aos.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
	  {/* <Provider store={store}> */}
		<App />
	  {/* </Provider> */}
	</React.StrictMode>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//   reportWebVitals();