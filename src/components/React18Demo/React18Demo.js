import React, { useState, Suspense, startTransition } from 'react';
import useFetch from '../../hooks/useFetch';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Placeholder from '../Placeholder/Placeholder';
import { fetchKanyeData } from './fakeApi';

const resource = fetchKanyeData();

const React18Demo = () => {
  const {
    data: quote,
    loading,
    error,
    refetch,
  } = useFetch('https://api.kanye.rest');

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handlePrevClick() {
    // Lower priority (NEW in React 18)
    startTransition(() => {
      setCount((c) => c - 1);
    });
    // This is urgent
    setFlag((f) => !f);
  }

  function handleNextClick() {
    setCount((c) => c + 1);
    setFlag((f) => !f);
    // Pre React 18, React will only re-render once at the end (batching!)
  }
  function handleKanyeClick() {
    refetch().then(() => {
      // React 18 and later DOES batch these inside nested callbacks
      setCount((c) => c + 1);
      setFlag((f) => !f);
      // React will only re-render once at the end (that's batching!)
    });
  }
  return (
    <div>
      <p>Count: {count}</p>
      <p>Flag: {flag ? 'TRUE' : 'FALSE'}</p>
      <Button mr primary onClick={handlePrevClick}>
        -
      </Button>

      <Button primary onClick={handleNextClick}>
        +
      </Button>
      <br />
      <Button primary onClick={handleKanyeClick}>
        Next wisdom
      </Button>

      <Placeholder border>
        <Suspense fallback={'Loading kanye'}>
          <KanyeConcurrent />
        </Suspense>
      </Placeholder>
      {/*
      <Placeholder border>
        <b>Kanye says: </b>
        {loading ? 'loading' : error ? 'error' : quote}
      </Placeholder> */}
    </div>
  );
};

export default React18Demo;

const KanyeConcurrent = () => {
  const kanye = resource.kanye.read();
  return <b>Kanye says: {kanye.quote} </b>;
};
