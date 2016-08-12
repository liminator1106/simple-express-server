const axios = require('axios');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('/index.html');
  })

  app.get('/instagram', (req, res) => {
    axios.get('https://api.instagram.com/v1/locations/search?lat=34.054348&lng=-118.44390099999998&access_token=32648064.93ca2fa.baa7da1964c94c408a089d1376a3bc52&distance=1')
    .then(function (response) {

      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  });
}