const path = require('path')
const fs = require('fs')
const express = require('express')
const routerSpa = express.Router()

const routes = /\/(setup|forecast\/[^\/]*\/(overview|days\/[1-5]))?/
const file = 'index.html'

const {siteRoot} = require('./site.config.js')
const  filePath = path.resolve(siteRoot, file)

routerSpa.get('/', (req, res) => {
    if (fs.existsSync(filePath)) res.sendFile(filePath)
    else {
        res.sendStatus(404)
    }
});

module.exports = {
    route: routes,
    handler: routerSpa
}
