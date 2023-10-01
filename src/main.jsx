import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './css/index.css'
import './css/home.css'
import './css/aboutme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
