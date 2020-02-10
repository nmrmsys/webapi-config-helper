
async function main(){
    const WebApi = require('./index')
    const webapi = new WebApi({
        prefixUrl: 'https://api.github.com'
    })
    const res = await webapi.call('users/nmrmsys', {prm1: 'abc'})
}

main();
