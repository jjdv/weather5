const path = require('path')
const fs = require('fs')
const express = require('express');
const app = express()

const serverConfig = require('./server.config.js')
const siteRoot = serverConfig.siteRoot

if (serverConfig.siteRouters) {
  const siteRouters = require(serverConfig.siteRouters)
  siteRouters.forEach(router => {
    app.use(router.route, router.handler)
  })
}

app.get('*', (req, res) => {
  const  filePath = path.resolve(siteRoot, req.path.slice(1))
  if (fs.existsSync(filePath)) res.sendFile(filePath)
  else {
    res.sendStatus(404)
  }
});

app.listen(serverConfig.port, serverConfig.hostname, () => {
  console.log(`Server running at http://${serverConfig.hostname}:${serverConfig.port}/`);
});
