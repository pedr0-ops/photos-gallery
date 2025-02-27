import React from 'react';
import Home from './components/Home/Home';
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
