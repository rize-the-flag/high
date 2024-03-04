import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";

import "shared/config/i18n/i18n";


const container = document.getElementById('root');
const root  = container ? createRoot(container) : console.error('root was not found');

root && root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)



