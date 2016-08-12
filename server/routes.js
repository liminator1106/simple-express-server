module.exports = function(app) {
  app.get('/', () => {
    res.send('/index.html');
  })
}