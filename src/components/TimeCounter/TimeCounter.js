import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import getDateString from '../utils/getDateString';
import { StyledTimeCounter } from './TimeCounter.styled';

const SECOND_IN_MS = 1000;

const useTime = (time) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentDate(new Date());
    }, [SECOND_IN_MS]);
    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [time]);

  const getFancyTimeString = useCallback(
    (date) => {
      return getDateString(date);
    },
    [currentDate]
  );

  const fancyTimeString = useMemo(() => {
    return getDateString(currentDate);
  }, [currentDate]);

  const getTimeNSecondsAgo = useCallback(
    (durationInSeconds) => {
      return new Date(currentDate - durationInSeconds * SECOND_IN_MS);
    },
    [currentDate]
  );

  return {
    currentDate,
    fancyTimeString,
    getTimeNSecondsAgo,
    getFancyTimeString,
  };
};

function TimeCounter(props) {
  const {
    currentDate,
    fancyTimeString,
    getTimeNSecondsAgo,
    getFancyTimeString,
  } = useTime();
  const [currentSeconds, setCurrentSeconds] = useState(0);

  const setMillion = () => setCurrentSeconds(1000000);
  const setBillion = () => setCurrentSeconds(1000000000);
  const reset = () => setCurrentSeconds(0);
  const handleChange = (e) => setCurrentSeconds(e.target.value);

  return (
    <StyledTimeCounter {...props}>
      <Heading component='h2'>Time : {fancyTimeString}</Heading>

      <div>
        <Heading component='h2'>
          Time{' '}
          <input value={currentSeconds} onChange={handleChange} type='number' />{' '}
          seconds ago:
          <b> {getFancyTimeString(getTimeNSecondsAgo(currentSeconds))}</b>
        </Heading>
        <Button primary mr onClick={setMillion}>
          1 Million
        </Button>
        <Button primary mr onClick={setBillion}>
          1 Billion!
        </Button>
        <Button secondary onClick={reset}>
          Reset
        </Button>
      </div>
    </StyledTimeCounter>
  );
}

export default TimeCounter;
