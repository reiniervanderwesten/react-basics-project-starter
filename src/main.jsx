import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { extendTheme } from '@chakra-ui/react';

const theme=extendTheme({
  breakpoints: {
    base: '0px',
    sm: '320px',
    md: '480px',
    lg: '766px',
  },

})




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
