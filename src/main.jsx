import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <ChakraProvider theme={theme}>
     <ColorModeScript initialColorMode={theme.config.initialColorMode}/> */}
     <App />
     {/* </ChakraProvider> */}

  </React.StrictMode>,
)
