//useFetch.js
import { useState, useEffect, useCallback } from 'react';

function useFetch(url, hold = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchUrl = useCallback(async () => {
    setLoading('loading...');
    setData(null);
    setError(null);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.quote) {
        setData(data.quote);
      }
      setLoading(false);
    } catch (err) {
      setError('Oops, error!', err);
      setLoading(false);
    }
  }, [url]);

  const refetch = useCallback(() => {
    fetchUrl();
  }, [url]);

  useEffect(() => {
    if (hold) return;
    fetchUrl();
  }, [url, hold]);

  return { data, loading, error, refetch };
}

export default useFetch;
