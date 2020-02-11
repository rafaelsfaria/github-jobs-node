import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

function Job ({job}) {
  return (
    <Paper className='job'>
    <div className="flex-align-mid">
        <div className="job-title-location">
            <Typography variant='h6'>{job.title}</Typography>
            <Typography variant='h5'>{job.company}</Typography>
            <Typography>{job.location}</Typography>
        </div>
    </div>
    </Paper>
  );
}

export default Job;