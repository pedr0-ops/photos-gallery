import React from 'react';
import Home from './pages/Home/Home';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <Theme>
      <Home />
    </Theme>
  );
}

export default App;
