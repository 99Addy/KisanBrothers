const { Storage } = require('node-appwrite');

const client = require('./appwrite-initialize');

const storage = new Storage(client);

const promise = storage.getBucket('6484beb5ea986a2e3dbb');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});