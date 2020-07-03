import axios from 'axios';

export async function loginRequest() {
  return await axios
    .get(`https://run.mocky.io/v3/1b894609-fcf2-42b0-9665-62da70a11cf1`)
    .then(function(response) {
      // handle success
      return response;
    })
    .catch(function(error) {
      // handle error
      return error;
    });
}
