import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from './components/ui/provider'
import App from './App'
import './index.css'
import { ColorModeProvider } from './components/ui/color-mode'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider defaultTheme='white'>
      <Provider>
        <App />
      </Provider>
    </ColorModeProvider>
  </React.StrictMode>,
)
