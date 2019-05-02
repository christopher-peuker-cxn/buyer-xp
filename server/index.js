// const uuid        = require('uuid');
// const PORT = process.env.PORT || 3000;
const express     = require('express');
const next        = require('next');

const dev = process.env.NODE_ENV || 'development';

const app = next({dev, dir: './app'});
const handle = app.getRequestHandler();
const routes = require('./routes');
const apiRoutes = require('./routes/apiRoutes');

const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express();

  server.get('/api/*', apiRoutes);
  
  server.use(handler)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})