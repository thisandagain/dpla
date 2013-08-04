## dpla
#### API client for the Digital Public Library of America

### Installation
```bash
npm install dpla
```

### Basic Use
```javascript
var dpla = require('dpla')('APIKEY');

dpla({
    uri: '/items',
    search: {
        q: 'fruit+AND+banana'
    }
}, function (err, results) {
    // Yay data!
});
```

### Testing
```bash
npm test
```