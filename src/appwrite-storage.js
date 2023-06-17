// const { Storage } = require('appwrite');
// const client = require('./appwrite-initialize');
import { Storage } from 'appwrite';
import { client } from './appwrite-initialize';

const storage = new Storage(client);

function fetchImg(bucket_id, file_id){
    const url = storage.getFileView(bucket_id, file_id);
    return url;
}

export {fetchImg}
// module.exports = {fetchImg}

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });