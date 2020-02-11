import React from 'react';

import Jobs from './Jobs';

const JOB_API_URL = '/api/jobs';

const fetchJobs = async (updateCb) => {
  const res = await fetch(JOB_API_URL)
  const json  = await res.json()
  updateCb(json)
}

function App() {
  const [jobList, updateJobs] = React.useState([]);
  React.useEffect(() => { fetchJobs(updateJobs) }, [])
  return (
    <div className="App">
      <Jobs jobs = {jobList} />
    </div>
  );
}

export default App;
