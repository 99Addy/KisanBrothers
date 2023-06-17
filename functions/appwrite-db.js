const { Databases } = require('node-appwrite');
const client = require('./appwrite-initialize')

const databases = new Databases(client);

const promise = databases.listDocuments(
    '6484bcb3c69b6932aa7b',
    '6484bcce320e59dba04d'
);

module.exports = await promise['documents'];

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log("Error:",error);
// });