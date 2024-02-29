import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";



const container = document.getElementById('root');
const root  = container ? createRoot(container) : console.error('root was not found');

root && root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)



