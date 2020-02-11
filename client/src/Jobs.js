import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';
import JobModal from './JobModal'
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function Jobs({ jobs }) {
  const numJobs = jobs.length;
  return (
    <div>
      <Typography variant="h4" component="h1">
        Entry Level  Software Jobs
      </Typography>
      <Typography variant="h6" component="h2">
        Found {numJobs} Jobs
      </Typography>
      {
        jobs.map(
            (job, i) => <Job key={i} job={job} />
        )
      }
    </div>
  )
}

export default Jobs;