import axios from 'axios';
import Promise from 'bluebird';

Promise.resolve(axios({
  url: 'https://content.api.nytimes.com/svc/weather/v2/current-and-seven-day-forecast.json',
})).then(response => {
  console.log(response.data);
});
