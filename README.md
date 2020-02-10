webapi-config-helper
====
HTTP client wrapper with config helper

## Installation
```
$ npm install webapi-config-helper
```

## Usage
```javascript
const WebApi = require('webapi-config-helper');
const webapi = new WebApi({
    _config: { baseURL: 'http://localhost:3000/api' },
    _post: ['apiAction2'],
    apiAction3: { url: 'http://localhost:3001/api/apiAction3' }
});
const res = await webapi.call('apiAction1', params);
```

## Licence

[MIT](http://opensource.org/licenses/mit-license.php)

## Author

[nmrmsys](https://github.com/nmrmsys)