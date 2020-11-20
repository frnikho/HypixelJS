# HypixelJS

HypixelJS is a library build & create with typescript to provide an interface between the Hypixel API and javascript

### status 
Currently in development also work and can maybe contains errors and missing api methods

### Installation
```sh
$ npm i @frnikho/hypixel-js
```

### Usage

start to import hypixel-js lib and create a new instance of Hypixel and initialize token
```javascript
const Hypixel = require('@frnikho/hypixel-js'); // import hypixel-js library

let token = "hypixel token"; //get your api token ingame (/api)

let api = await new Hypixel().initializeToken(token); // initialize Hypixel class with token
```

now you can use all function from library

```javascript
api.findUser('5cd4d33f-c897-4d05-b081-708961730358', (user) => { // get user info from hypixel server
        user.isOnline(token, (online) => {
            if (online) {
                console.log("Player is online !");
            } else {
                console.log("Player is not online !");
            }
        })
    });
```
output
```sh
Player is online !
```

### Dependencies

| Name | LINK |
| ------ | ------ |
| Axios | https://www.npmjs.com/package/axios |

### Source

See on [Github](https://github.com/frnikho/HypixelJS)
