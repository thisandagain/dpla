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

### Complex Search Queries
```javascript
var dpla = require('dpla')('APIKEY');

dpla({
    uri: '/items',
    search: {
        'q': 'atl*',
        'sourceResource.title': 'africa',
        'page_size': 25,
        'page': 2
    }
}, function (err, results) {
    // Even more data!
});
```

### Testing
```bash
npm test
```