import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/cartestproject">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
</React.StrictMode>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename="/cartestproject">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

