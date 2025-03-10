import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ReactDOM from "react-dom/client";
import TitleContext from './components/TitleContext.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <TitleContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TitleContext>
  </StrictMode>
);