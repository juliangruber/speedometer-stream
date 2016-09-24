'use strict'

const Speedometer = require('speedometer')
const Transform = require('stream').Transform

const _speedometer = Symbol()

module.exports = class Stream extends Transform {
  constructor () {
    super()
    this[_speedometer] = Speedometer()
  }
  _transform (buf, _, cb) {
    this.emit('speed', this[_speedometer](buf.length))
    cb(null, buf)
  }
}
