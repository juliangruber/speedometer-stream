
# speedometer-stream

A through stream that emits speed events! Based on
[speedometer](https://github.com/mafintosh/speedometer).

## Example

```js
const Speedometer = require('speedometer-stream')
const fs = require('fs')

const speedometer = new Speedometer()
speedometer.on('speed', bps => console.log(`Bytes per second: ${bps}`))

fs.createReadStream('/dev/urandom')
.pipe(speedometer)
.on('data', () => {})
```

## Installation

```bash
$ npm install speedometer-stream
```

## license

MIT
