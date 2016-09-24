'use strict'

const Speedometer = require('.')
const fs = require('fs')

const speedo = new Speedometer()
speedo.on('speed', console.log)

fs.createReadStream('/dev/urandom')
.pipe(speedo)
.on('data', () => {})
