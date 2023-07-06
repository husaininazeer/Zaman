import React from 'react'

import PropTypes from 'prop-types'
// import * as d3 from 'd3';

const TimelineComp = ({ data }) => {
  return data.map((entry) => <p>{entry.name}</p>)
}

TimelineComp.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    start: PropTypes.number,
    end: PropTypes.number,
    role: PropTypes.string,
  }),
}
export default TimelineComp
