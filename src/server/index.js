import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import {getStore} from '../store'
import {template} from './template'
import routes from '../routes' 

const app = express()

// Serving static files
app.use('/wechat-page',express.static('public'));

// hide powered by express
app.disable('x-powered-by');

// start the server
app.listen(process.env.PORT || 3000);

app.use('/api', proxy('http://m.zouyifeng.xyz', {
  proxyReqPathResolver: function (req) {
    console.log('/wechat' + req.url)
    return '/wechat' + req.url
  }
}));

// server rendered home page
app.get('*', (req, res) => {
  const store = getStore(req);
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })
  Promise.all(promises).then(() => {
    const context = {css: []}
    const html = template(store, routes, req, context)
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.notFind) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  }).catch(e => {
    console.log(e)
    res.send('sorry, request error')
  })
});