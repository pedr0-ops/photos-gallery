import React from 'react';
import Home from './components/Home/Home';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <Home />
      </Theme>
    </QueryClientProvider>
  );
}

export default App;
