import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import Heading from './components/Heading/Heading';
import Placeholder from './components/Placeholder/Placeholder';
import React18Demo from './components/React18Demo/React18Demo';
import TimeCounter from './components/TimeCounter/TimeCounter';

const LazyComponent = React.lazy(() =>
  import('./components/React18Demo/LazyComponent')
); // Lazy-loaded

const theme = {
  colors: {
    primary: '#A4D67C',
    secondary: '#FFEB88',
    bad: '#FF9F92',
    black: '#3e3e3e',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense>
        <Placeholder border>
          <Heading component='h1'>Welcome to React Demo</Heading>
          <TimeCounter />
        </Placeholder>

        <Placeholder border>
          <React18Demo />
        </Placeholder>

        <Placeholder border>
          <Heading component='h1'>Lazy loading demo</Heading>
          <Suspense fallback={'Loading component itself'}>
            <LazyComponent />
          </Suspense>
        </Placeholder>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
