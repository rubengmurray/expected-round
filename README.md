### A simple rounder to expected values for JavaScript.

This has not been performance tested.

##### Install
`npm i --save expected-round`

##### Usage
```javascript
const expectedRound = require('expected-round')
expectedRound.round10(1.005, -2) // Rounds 1.005 to 2 decimal places
```

Plain JS vs Expected-Round comparison.

##### Plain JS
```javascript
Math.round(1.005 * 100) / 100 // outputs 1
```

##### Expected-Round
```javascript
round10(1.005, -2) // outputs 1.01
```