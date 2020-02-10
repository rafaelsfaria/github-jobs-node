const CronJob = require('cron').CronJob;
const fetchGithubJobs = require('./task/fetch');

new CronJob('0 * * * *', fetchGithubJobs, null, true, 'America/Sao_Paulo');
