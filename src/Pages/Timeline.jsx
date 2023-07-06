import React from 'react';
import TimelineComp from '../Components/TimelineComp';
import data from '../data.json';
import { sortDataByEndDate } from '../utils';

const Timeline = () => {
  const sortedData = sortDataByEndDate(data);
  return (
    <>
      <TimelineComp data={sortedData} />
    </>
  );
};

export default Timeline;
